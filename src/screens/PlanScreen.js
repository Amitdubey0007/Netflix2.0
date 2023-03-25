import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import "./PlanScreen.css";

function PlanScreen() {
  const [products, setProducts] = useState([]);

  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then(function (querySnapshot) {
        const products = {};
        querySnapshot.forEach(async function (productDoc) {
          products[productDoc.id] = productDoc.data();
          console.log(productDoc.id, " => ", productDoc.data());
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
            console.log(price.id, " => ", price.data());
          });
        });
        console.log(products, "fetched products");
        setProducts(products);
      });
  }, []);
  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionsId } = snap.data();

      if (error) {
        alert(`n eror occured:${error.message}")`);
      }
      if (sessionsId) {
        const stripe = await loadStripe(
          // "pk_test_51Mcb66SCixS6gdthzby3NoyO9k9T9SeKf9cEBOISs4azuUjatvvyJsm62kRuH8r4CeE5hlg5zC2tVmPg3wxn5lBW00umeoRFc6"
          // "pk_test_51Mcb66SCixS6gdthzby3NoyO9k9T9SeKf9cEBOISs4azuUjatvvyJsm62kRuH8r4CeE5hlg5zC2tVmPg3wxn5lBW00umeoRFc6"
          "sk_test_51Mcb66SCixS6gdthjFLqFip9wi7N9O0njwYu5WCSATj5p7bpNI21KdufLodmmxsry74k4UkE2a8bY8lmhWnNYsH500wvyCypax"
        );
        stripe.redirectToCheckout({ sessionsId });
      }
    });
  };

  return (
    <div className="plansScreen">
      {Object.entries(products).map(([productId, productData]) => {
        console.log(productId, "777");
        return (
          <div className="planScreen_plans">
            <div className="planScreen_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description} </h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;

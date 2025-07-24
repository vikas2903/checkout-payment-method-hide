// import {
//   reactExtension,
//   Banner,
//   BlockStack,
//   Text,
//   useApi,
//   useApplyAttributeChange,
//   useInstructions,
//   useTranslate,
//   Button,
//   Grid,
//   Icon,
//   useApplyDiscountCodeChange,
// } from "@shopify/ui-extensions-react/checkout";

// // 1. Choose an extension target
// export default reactExtension("purchase.checkout.reductions.render-after", () => (
//   <Extension />
// ));

// function Extension() {
//   const translate = useTranslate();

//   const { extension } = useApi();
//   const instructions = useInstructions();
//   const applyAttributeChange = useApplyAttributeChange();
//   const applyDiscountCodeChange = useApplyDiscountCodeChange();

//   // ✅ Log checkout ID
 

//   // 2. Check instructions for feature availability
//   if (!instructions.attributes.canUpdateAttributes) {
//     return (
//       <Banner title="offer-btn" status="warning">
//         {translate("attributeChangesAreNotSupported")}
//       </Banner>
//     );
//   }

//   // Offer apply handler
//   async function onApplyOffer() {
//     await applyDiscountCodeChange({
//       type: "addDiscountCode",
//       code: "PRE10",
//     });

//     await applyAttributeChange({
//       key: "cod-hide",
//       type: "updateAttribute",
//       value: "applied",
//     });

//     await applyPaymentCustomization?.({
//       type: "hide",
//       paymentMethod: {
//         type: "manual",
//         id: "cash_on_delivery"
//       }
//     });
//   }


//     const sessionId = crypto.randomUUID();
//     const shop = "d2c-apps.myshopify.com"

//     console.log("sessionId", sessionId);
   
    

//   // 3. Render a UI
//   return (
//     <BlockStack>
//       <Text size="large" emphasis="bold">Additional Offers</Text>
//       <BlockStack border="dotted" padding="base" background="surface">
//         <Grid columns={["auto", "1fr", "auto"]} spacing="base">
//           <Icon source="discount" tone="subdued" />
//           <BlockStack spacing="none">
//             <Text size="medium" emphasis="bold">FLAT 10% OFF</Text>
//             <Text size="small">Get Flat 10% OFF on Prepaid Orders</Text>
//           </BlockStack>
//           <Button kind="primary" tone="critical" inlineAlignment="end" onPress={onApplyOffer}>
//             Apply
//           </Button>
//         </Grid>
//       </BlockStack>
//     </BlockStack>
//   );
// }


// import {
//   reactExtension,
//   Banner,
//   BlockStack,
//   Text,
//   useApi,
//   useApplyAttributeChange,
//   useInstructions,
//   useTranslate,
//   Button,
//   Grid,
//   Icon,
//   useApplyDiscountCodeChange,
//   useDiscountCodes,
// } from "@shopify/ui-extensions-react/checkout";
// import { useRef, useEffect } from "react";

// // 1. Choose an extension target
// export default reactExtension("purchase.checkout.reductions.render-after", () => (
//   <Extension />
// ));

// function Extension() {
//   const translate = useTranslate();
//   const { extension } = useApi();
//   const instructions = useInstructions();
//   const applyAttributeChange = useApplyAttributeChange();
//   const applyDiscountCodeChange = useApplyDiscountCodeChange();
//   const discountCodes = useDiscountCodes(); // ✅ Hook to get discount codes
//   const sessionIdRef = useRef(crypto.randomUUID()); // ✅ Stable session ID
//   const shop = "d2c-apps.myshopify.com";

//   const isPre10Applied = discountCodes.some(code => code.code === "PRE10");
//   const status = isPre10Applied ? 1 : 0;

//   // ✅ Log once when component mounts or discount changes
//   useEffect(() => {

//     console.log("sessionId:", sessionIdRef.current);
//     console.log("shop:", shop);
//     console.log("PRE10 Applied:", isPre10Applied);
//     console.log("Status:", status);


//     const sessionData ={
//       sessionId:sessionIdRef.current,
//       shop:"d2c-apps.myshopify.com",
//       discountApplied:isPre10Applied,
//       status:status
//     }
//     fetch('https://shopify-wishlist-app-mu3m.onrender.com/api/checkout-session-set',{
//       method:"POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(sessionData),

//     })

//   }, [isPre10Applied]);

//   if (!instructions.attributes.canUpdateAttributes) {
//     return (
//       <Banner title="Offer Button" status="warning">
//         {translate("attributeChangesAreNotSupported")}
//       </Banner>
//     );
//   }

//   async function onApplyOffer() {
//     await applyDiscountCodeChange({
//       type: "addDiscountCode",
//       code: "PRE10",
//     });

//     await applyAttributeChange({
//       key: "cod-hide",
//       type: "updateAttribute",
//       value: "applied",
//     });

//     await applyPaymentCustomization?.({
//       type: "hide",
//       paymentMethod: {
//         type: "manual",
//         id: "cash_on_delivery"
//       }
//     });
//   }

//   return (
//     <BlockStack>
//       <Text size="large" emphasis="bold">Additional Offers</Text>
//       <BlockStack border="dotted" padding="base" background="surface">
//         <Grid columns={["auto", "1fr", "auto"]} spacing="base">
//           <Icon source="discount" tone="subdued" />
//           <BlockStack spacing="none">
//             <Text size="medium" emphasis="bold">FLAT 10% OFF</Text>
//             <Text size="small">Get Flat 10% OFF on Prepaid Orders</Text>
//           </BlockStack>
//           <Button kind="primary" tone="critical" inlineAlignment="end" onPress={onApplyOffer}>
//             Apply
//           </Button>
//         </Grid>
//       </BlockStack>
//     </BlockStack>
//   );
// }


// import {
//   reactExtension,
//   Banner,
//   BlockStack,
//   Text,
//   useApi,
//   useApplyAttributeChange,
//   useInstructions,
//   useTranslate,
//   Button,
//   Grid,
//   Icon,
//   useApplyDiscountCodeChange,
//   useDiscountCodes,
// } from "@shopify/ui-extensions-react/checkout";
// import { useRef } from "react";

// // 1. Choose an extension target
// export default reactExtension("purchase.checkout.reductions.render-after", () => (
//   <Extension />
// ));

// function Extension() {
//   const translate = useTranslate();
//   const { extension } = useApi();
//   const instructions = useInstructions();
//   const applyAttributeChange = useApplyAttributeChange();
//   const applyDiscountCodeChange = useApplyDiscountCodeChange();
//   const discountCodes = useDiscountCodes();

//   const sessionIdRef = useRef(crypto.randomUUID());
//   const shop = "d2c-apps.myshopify.com";

//   // 2. Offer Apply Handler
//   async function onApplyOffer() {
//     try {
//       await applyDiscountCodeChange({
//         type: "addDiscountCode",
//         code: "PRE10",
//       });

//       await applyAttributeChange({
//         key: "cod-hide",
//         type: "updateAttribute",
//         value: "applied",
//       });

//       if (typeof applyPaymentCustomization === "function") {
//         await applyPaymentCustomization({
//           type: "hide",
//           paymentMethod: {
//             type: "manual",
//             id: "cash_on_delivery",
//           },
//         });
//       }

//       // After successful apply, confirm the discount is now present
//       const isPre10Applied = discountCodes.some(code => code.code === "PRE10");
//       const status = isPre10Applied ? 1 : 0;

//       const sessionData = {
//         sessionId: sessionIdRef.current,
//         shop,
//         discountApplied: isPre10Applied,
//         status,
//       };

//       console.log("Sending session data:", sessionData);

//       await fetch('https://shopify-wishlist-app-mu3m.onrender.com/api/checkout-session-set', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(sessionData),
//       })
//       .then(response => response.json())
//       .then(data => console.log(data))

//     } catch (err) {
//       console.error("Offer apply failed:", err);
//     }
//   }

//   // 3. Guard against unsupported environments
//   if (!instructions.attributes.canUpdateAttributes) {
//     return (
//       <Banner title="Offer Button" status="warning">
//         {translate("attributeChangesAreNotSupported")}
//       </Banner>
//     );
//   }

//   // 4. Render UI
//   return (
//     <BlockStack>
//       <Text size="large" emphasis="bold">Additional Offers</Text>
//       <BlockStack border="dotted" padding="base" background="surface">
//         <Grid columns={["auto", "1fr", "auto"]} spacing="base">
//           <Icon source="discount" tone="subdued" />
//           <BlockStack spacing="none">
//             <Text size="medium" emphasis="bold">FLAT 10% OFF</Text>
//             <Text size="small">Get Flat 10% OFF on Prepaid Orders</Text>
//           </BlockStack>
//           <Button
//             kind="primary"
//             tone="critical"
//             inlineAlignment="end"
//             onPress={onApplyOffer}
//           >
//             Apply
//           </Button>
//         </Grid>
//       </BlockStack>
//     </BlockStack>
//   );
// }


// import {
//   reactExtension,
//   Banner,
//   BlockStack,
//   Text,
//   useApi,
//   useApplyAttributeChange,
//   useInstructions,
//   useTranslate,
//   Button,
//   Grid,
//   Icon,
//   useApplyDiscountCodeChange,
//   useDiscountCodes,
// } from "@shopify/ui-extensions-react/checkout";
// import { useRef } from "react";

// export default reactExtension("purchase.checkout.reductions.render-after", () => (
//   <Extension />
// ));

// function Extension() {
//   const translate = useTranslate();
//   const { extension } = useApi();
//   const instructions = useInstructions();
//   const applyAttributeChange = useApplyAttributeChange();
//   const applyDiscountCodeChange = useApplyDiscountCodeChange();
//   const discountCodes = useDiscountCodes();

//   const sessionIdRef = useRef(crypto.randomUUID());
//   const shop = "d2c-apps.myshopify.com";

//   if (!instructions.attributes.canUpdateAttributes) {
//     return (
//       <Banner title="Offer Button" status="warning">
//         {translate("attributeChangesAreNotSupported")}
//       </Banner>
//     );
//   }

//   async function onApplyOffer() {
//     try {
//       await applyDiscountCodeChange({
//         type: "addDiscountCode",
//         code: "PRE10",
//       });

//       await applyAttributeChange({
//         key: "cod-hide",
//         type: "updateAttribute",
//         value: "applied",
//       });

//       await applyAttributeChange({
//         key: "checkout_session_id",
//         type: "updateAttribute",
//         value: sessionIdRef.current,
//       });

//       await applyAttributeChange({
//         key: "cod_hide_flag",
//         type: "updateAttribute",
//         value: "true",
//       });

//       const sessionData = {
//         sessionId: sessionIdRef.current,
//         shop,
//         discountApplied: true,
//         status: 1,
//       };

//       await fetch('https://shopify-wishlist-app-mu3m.onrender.com/api/checkout-session-set', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(sessionData),
//       });

//       console.log("Sent session data:", sessionData);
//     } catch (err) {
//       console.error("Offer apply failed:", err);
//     }
//   }

//   return (
//     <BlockStack>
//       <Text size="large" emphasis="bold">Additional Offers</Text>
//       <BlockStack border="dotted" padding="base" background="surface">
//         <Grid columns={["auto", "1fr", "auto"]} spacing="base">
//           <Icon source="discount" tone="subdued" />
//           <BlockStack spacing="none">
//             <Text size="medium" emphasis="bold">FLAT 10% OFF</Text>
//             <Text size="small">Get Flat 10% OFF on Prepaid Orders</Text>
//           </BlockStack>
//           <Button
//             kind="primary"
//             tone="critical"
//             inlineAlignment="end"
//             onPress={onApplyOffer}
//           >
//             Apply
//           </Button>
//         </Grid>
//       </BlockStack>
//     </BlockStack>
//   );
// }


// import {
//   reactExtension,
//   Banner,
//   BlockStack,
//   Text,
//   useApi,
//   useApplyAttributeChange,
//   useInstructions,
//   useTranslate,
//   Button,
//   Grid,
//   Icon,
//   useApplyDiscountCodeChange,
//   useDiscountCodes,
// } from "@shopify/ui-extensions-react/checkout";
// import { useRef } from "react";

// // Extension target
// export default reactExtension("purchase.checkout.reductions.render-after", () => (
//   <Extension />
// ));

// function Extension() {
//   const translate = useTranslate();
//   const { extension } = useApi();
//   const instructions = useInstructions();
//   const applyAttributeChange = useApplyAttributeChange();
//   const applyDiscountCodeChange = useApplyDiscountCodeChange();
//   const discountCodes = useDiscountCodes();

//   const sessionIdRef = useRef(crypto.randomUUID());
//   const shop = "d2c-apps.myshopify.com";

//   // Guard: Ensure cart attributes are supported
//   if (!instructions.attributes.canUpdateAttributes) {
//     return (
//       <Banner title="Offer Button" status="warning">
//         {translate("attributeChangesAreNotSupported")}
//       </Banner>
//     );
//   }

//   async function onApplyOffer() {
//     try {
//       // Step 1: Apply discount code
//       await applyDiscountCodeChange({
//         type: "addDiscountCode",
//         code: "PRE10",
//       });

//       // Step 2: Set session ID in cart attributes
//       await applyAttributeChange({
//         key: "checkout_session_id",
//         type: "updateAttribute",
//         value: sessionIdRef.current,
//       });

//       // Step 3: Set flags in cart attributes
//       await applyAttributeChange({
//         key: "cod-hide",
//         type: "updateAttribute",
//         value: "applied",
//       });

//       await applyAttributeChange({
//         key: "cod_hide_flag",
//         type: "updateAttribute",
//         value: "true",
//       });

//       // Step 4: Send session data to backend
//       const sessionData = {
//         sessionId: sessionIdRef.current,
//         shop,
//         discountApplied: true,
//         status: 1,
//       };

//       await fetch('https://shopify-wishlist-app-mu3m.onrender.com/api/checkout-session-set', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(sessionData),
//       }).catch(err => {
//         console.error("Failed to send session data:", err);
//       });

//       console.log("Session data sent:", sessionData);
//     } catch (err) {
//       console.error("Offer apply failed:", err);
//     }
//   }

//   return (
//     <BlockStack>
//       <Text size="large" emphasis="bold">Additional Offers</Text>
//       <BlockStack border="dotted" padding="base" background="surface">
//         <Grid columns={["auto", "1fr", "auto"]} spacing="base">
//           <Icon source="discount" tone="subdued" />
//           <BlockStack spacing="none">
//             <Text size="medium" emphasis="bold">FLAT 10% OFF</Text>
//             <Text size="small">Get Flat 10% OFF on Prepaid Orders</Text>
//           </BlockStack>
//           <Button
//             kind="primary"
//             tone="critical"
//             inlineAlignment="end"
//             onPress={onApplyOffer}
//           >
//             Apply
//           </Button>
//         </Grid>
//       </BlockStack>
//     </BlockStack>
//   );
// }


// import {
//   reactExtension,
//   Banner,
//   BlockStack,
//   Text,
//   useApi,
//   useApplyAttributeChange,
//   useInstructions,
//   useTranslate,
//   Button,
//   Grid,
//   Icon,
//   useApplyDiscountCodeChange,
//   useDiscountCodes,
// } from "@shopify/ui-extensions-react/checkout";
// import { useEffect, useRef } from "react";

// export default reactExtension("purchase.checkout.reductions.render-after", () => (
//   <Extension />
// ));

// function Extension() {
//   const translate = useTranslate();
//   const { extension } = useApi();
//   const instructions = useInstructions();
//   const applyAttributeChange = useApplyAttributeChange();
//   const applyDiscountCodeChange = useApplyDiscountCodeChange();
//   const discountCodes = useDiscountCodes();

//   const sessionIdRef = useRef(crypto.randomUUID());
//   const shop = "d2c-apps.myshopify.com";

//   // Check if PRE10 is applied
//   const isPre10Applied = discountCodes.some(code => code.code === "PRE10");

//   useEffect(() => {
//     // Handle when PRE10 is removed
//     if (!isPre10Applied) {
//       // Reset COD visibility
//       applyAttributeChange({
//         key: "cod-hide",
//         type: "updateAttribute",
//         value: "removed",
//       });

//       applyAttributeChange({
//         key: "cod_hide_flag",
//         type: "updateAttribute",
//         value: "true",
//       });

//       // Update backend that discount is removed
//       const sessionData = {
//         sessionId: sessionIdRef.current,
//         shop,
//         discountApplied: false,
//         status: 0,
//       };

//       fetch('https://shopify-wishlist-app-mu3m.onrender.com/api/checkout-session-set', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(sessionData),
//       }).catch(err => {
//         console.error("Failed to update session data after discount removal:", err);
//       });

//       console.log("Discount removed, COD shown again:", sessionData);
//     }
//   }, [isPre10Applied]);

//   // Guard
//   if (!instructions.attributes.canUpdateAttributes) {
//     return (
//       <Banner title="Offer Button" status="warning">
//         {translate("attributeChangesAreNotSupported")}
//       </Banner>
//     );
//   }

//   async function onApplyOffer() {
//     try {
//       await applyDiscountCodeChange({
//         type: "addDiscountCode",
//         code: "PRE10",
//       });

//       await applyAttributeChange({
//         key: "checkout_session_id",
//         type: "updateAttribute",
//         value: sessionIdRef.current,
//       });

//       await applyAttributeChange({
//         key: "cod-hide",
//         type: "updateAttribute",
//         value: "applied",
//       });

//       await applyAttributeChange({
//         key: "cod_hide_flag",
//         type: "updateAttribute",
//         value: "true",
//       });

//       const sessionData = {
//         sessionId: sessionIdRef.current,
//         shop,
//         discountApplied: true,
//         status: 1,
//       };

//       await fetch('https://shopify-wishlist-app-mu3m.onrender.com/api/checkout-session-set', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(sessionData),
//       });

//       console.log("Session data sent:", sessionData);
//     } catch (err) {
//       console.error("Offer apply failed:", err);
//     }
//   }

//   return (
//     <BlockStack>
//       <Text size="large" emphasis="bold">Additional Offers</Text>
//       <BlockStack border="dotted" padding="base" background="surface">
//         <Grid columns={["auto", "1fr", "auto"]} spacing="base">
//           <Icon source="discount" tone="subdued" />
//           <BlockStack spacing="none">
//             <Text size="medium" emphasis="bold">FLAT 10% OFF</Text>
//             <Text size="small">Get Flat 10% OFF on Prepaid Orders</Text>
//           </BlockStack>
//           <Button
//             kind="primary"
//             tone="critical"
//             inlineAlignment="end"
//             onPress={onApplyOffer}
//           >
//             Apply
//           </Button>
//         </Grid>
//       </BlockStack>
//     </BlockStack>
//   );
// }


import {
  reactExtension,
  Banner,
  BlockStack,
  Text,
  useApi,
  useApplyAttributeChange,
  useInstructions,
  useTranslate,
  Button,
  Grid,
  Icon,
  useApplyDiscountCodeChange,
  useDiscountCodes,
} from "@shopify/ui-extensions-react/checkout";
import { useEffect, useRef } from "react";

export default reactExtension("purchase.checkout.reductions.render-after", () => (
  <Extension />
));

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const instructions = useInstructions();
  const applyAttributeChange = useApplyAttributeChange();
  const applyDiscountCodeChange = useApplyDiscountCodeChange();
  const discountCodes = useDiscountCodes();
  const sessionIdRef = useRef(crypto.randomUUID());
  const shop = "d2c-apps.myshopify.com";

  const isPre10Applied = discountCodes.some(code => code.code === "PRE10");

  // ✅ Watch for discount removal and update flag
  useEffect(() => {

    async function updateCODFlag() {
      await applyAttributeChange({
        key: "cod_hide_flag",
        type: "updateAttribute",
        value: isPre10Applied ? "true" : "false",
      });

      // Optional: send to backend
      const sessionData = {
        sessionId: sessionIdRef.current,
        shop,
        discountApplied: isPre10Applied,
        status: true,
      };

      console.log(sessionData)
      await fetch('https://shopify-wishlist-app-mu3m.onrender.com/api/checkout-session-set', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sessionData),
      }).catch(console.error);
    }

    updateCODFlag();
  }, [isPre10Applied]);

  // ❗️Guard: unsupported environment
  if (!instructions.attributes.canUpdateAttributes) {
    return (
      <Banner title="Offer Button" status="warning">
        {translate("attributeChangesAreNotSupported")}
      </Banner>
    );
  }

  async function onApplyOffer() {
    try {
      await applyDiscountCodeChange({
        type: "addDiscountCode",
        code: "PRE10",
      });
      

      await applyAttributeChange({
        key: "checkout_session_id",
        type: "updateAttribute",
        value: sessionIdRef.current,
      });

      

      
    } catch (err) {
      console.error("Offer apply failed:", err);
    }
  }

  return (
    <BlockStack>
      <Text size="large" emphasis="bold">Additional Offers</Text>
      <BlockStack border="dotted" padding="base" background="surface">
        <Grid columns={["auto", "1fr", "auto"]} spacing="base">
          <Icon source="discount" tone="subdued" />
          <BlockStack spacing="none">
            <Text size="medium" emphasis="bold">FLAT 10% OFF</Text>
            <Text size="small">Get Flat 10% OFF on Prepaid Orders</Text>
          </BlockStack>
          <Button
            kind="primary"
            tone="critical"
            inlineAlignment="end"
            onPress={onApplyOffer}
          >
            Apply
          </Button>
        </Grid>
      </BlockStack>
    </BlockStack>
  );
}

// import {
//   reactExtension,
//   useApplyDiscountCodeChange,
//   useApplyAttributeChange,
//   useDiscountCodes,
//   BlockStack,
//   TextBlock,
//   Button,
//   useApplyCartAttributes,
// } from "@shopify/ui-extensions-react/checkout";

// export default reactExtension("purchase.checkout.block.render", () => <DiscountBlock />);

// function DiscountBlock() {
//   const applyDiscountCodeChange = useApplyDiscountCodeChange();
//   const applyAttributeChange = useApplyAttributeChange();


//   const applyCartAttributes = useApplyCartAttributes();
//   const discountCodes = useDiscountCodes();


//   const isPre10Applied = discountCodes.some(
//     (code) => code.code.toLowerCase() === "pre10"
//   );

//   // ✅ If PRE10 is already applied, make sure disable_cod is set
//   if (isPre10Applied) {
//     applyAttributeChange({
//       type: "updateAttribute",
//       key: "disable_cod",
//       value: "true",
//     });
//     return null;
//   }


//   // Check if PRE10 is applied
//   const pre10Applied = discountCodes.some((d) => d.code === 'PRE10');

//   if (pre10Applied) {
//     applyCartAttributes([{ key: 'disable_cod', value: 'true' }]);
//   } else {
//     applyCartAttributes([{ key: 'disable_cod', value: 'false' }]);
//   }

//   return (
//     <BlockStack spacing="tight">
//       <TextBlock emphasis="bold">🎁 Get 10% OFF on prepaid orders</TextBlock>
//       <Button
//         onPress={async () => {
//           // 1. Apply the discount code
//           const result = await applyDiscountCodeChange({
//             type: "addDiscountCode",
//             code: "PRE10",
//           });

//           console.log("Discount apply result:", result);

//           // 2. Set the cart attribute to disable COD
//           const attrResult = await applyAttributeChange({
//             type: "updateAttribute",
//             key: "disable_cod",
//             value: "true",
//           });

//           console.log("Attribute apply result:", attrResult);
//         }}
//       >
//         Apply PRE10
//       </Button>
//     </BlockStack>
//   );
// }


// import {
//   reactExtension,
//   BlockStack,
//   Button,
//   Banner,
//   useApplyDiscountCodeChange,
//   useApplyAttributeChange,
//   useDiscountCodes,
//   useTranslate,
// } from "@shopify/ui-extensions-react/checkout";

// // 1️⃣ Target extension to render below line items
// export default reactExtension("purchase.checkout.shipping-option-list.render-after", () => (
//   <Extension />
// ));

// function Extension() {
//   const translate = useTranslate();
//   const applyDiscount = useApplyDiscountCodeChange();
//   const applyAttributeChange = useApplyAttributeChange();
//   const discountCodes = useDiscountCodes();

//   const pre10Applied = discountCodes.some((d) => d.code.toUpperCase() === "PRE10");

//   // 2️⃣ When button clicked, apply discount code and set attribute
//   async function handleApplyDiscount() {
//     // Apply discount code
//     await applyDiscount({
//       type: "addDiscountCode",
//       code: "PRE10",
//     });

//     // Set attribute
//     await applyAttributeChange({
//       key: "disable_cod",
//       type: "updateAttribute",
//       value: "true",
//     });
//   }

//   return (
//     <BlockStack padding="tight">
//       {pre10Applied ? (
//         <Banner title="PRE10 discount applied" status="success">
//           COD payment option will be disabled.
//         </Banner>
//       ) : (
//         <>
//           <Button onPress={handleApplyDiscount}>
//             Apply PRE10 Discount
//           </Button>
//         </>
//       )}
//     </BlockStack>
//   );
// }

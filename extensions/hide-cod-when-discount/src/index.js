// // @ts-check

// /**
//  * @typedef {import("../generated/api").RunInput} RunInput
//  * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
//  */

// /**
//  * @type {FunctionRunResult}
//  */
// const NO_CHANGES = {
//   operations: [],
// };

// /**
//  * @param {RunInput} input
//  * @returns {FunctionRunResult}
//  */
// export function run(input) {
//   // const configuration = JSON.parse(
//   //   input?.paymentCustomization?.metafield?.value ?? "{}"
    
//   // );

  
//   const COUNTRY_CODE = input?.cart?.deliveryGroups[0]?.deliveryAddress?.countryCode
//   // const CODE_METHOD_ID = input.paymentMethods?.find(pm => pm.name.includes("COD"))?.id;
//   const CODE_METHOD_ID = input.paymentMethods?.find(pm =>
//   pm.name.toLowerCase().includes("cod") || pm.name.toLowerCase().includes("Cash on Delivery (COD)")
// )?.id;

//   console.log("Vikas :) its working...")
//   console.log(COUNTRY_CODE, CODE_METHOD_ID);

//   if(COUNTRY_CODE === "IN" && CODE_METHOD_ID) {

//        return{
//       operations: [
//         {
//           hide:{
//             paymentMethodId:CODE_METHOD_ID
//           }
//         }
//       ]
//        }

//   }

//   return NO_CHANGES;
// };








// /**
//  * @typedef {import("../generated/api").RunInput} RunInput
//  * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
//  */

// const NO_CHANGES = {
//   operations: [],
// };

// /**
//  * @param {RunInput} input
//  * @returns {FunctionRunResult}
//  */
// export function run(input) {
//   const COUNTRY_CODE = input?.cart?.deliveryGroups?.[0]?.deliveryAddress?.countryCode;

//   const CODE_METHOD_ID = input?.paymentMethods?.find(pm =>
//     pm.name.toLowerCase().includes("cod") || pm.name.toLowerCase().includes("cash on delivery")
//   )?.id;

//   // Get the `cod_hide_flag` attribute from cart
//   const cartAttributes = input?.cart?.attributes ?? [];
//   const codFlag = cartAttributes.find(attr => attr.key === "cod_hide_flag")?.value;

//   console.log("Country:", COUNTRY_CODE);
//   console.log("COD Method ID:", CODE_METHOD_ID);
//   console.log("COD Flag from cart:", codFlag);

//   if (COUNTRY_CODE === "IN" && CODE_METHOD_ID && codFlag === "true") {
//     return {
//       operations: [
//         {
//           hide: {
//             paymentMethodId: CODE_METHOD_ID,
//           },
//         },
//       ],
//     };
//   }

//   return NO_CHANGES;
// }


/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @type {FunctionRunResult}
 */
const NO_CHANGES = {
  operations: [],
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  const COUNTRY_CODE = input?.cart?.deliveryGroups?.[0]?.deliveryAddress?.countryCode ?? null;

  // const attributes = input?.cart?.attribute || [];

  // const codFlagAttr = attributes.find(attr => attr.key === "cod_hide_flag");
  // const isCodHidden = codFlagAttr?.value === "true";


  // const attributes = input?.cart?.attribute || [];
  // const codFlagAttr = attributes.find(attr => attr.key === "cod_hide_flag");

  // const isCodHidden = codFlagAttr?.value === "true";


//   const attributes = input?.cart?.attributes || [];

// const codFlagAttr = attributes.find(attr => attr.key === "cod_hide_flag");
// const isCodHidden = codFlagAttr?.value === true;
  
  const codFlag = input?.cart?.attribute?.value;


  const COD_METHOD_ID = input.paymentMethods?.find(pm =>
    pm.name.toLowerCase().includes("cod") ||
    pm.name.toLowerCase().includes("cash on delivery")
  )?.id;

  console.log("Country:", COUNTRY_CODE);
  // console.log("COD Hide Flag:", isCodHidden);
  console.log("COD Method ID:", COD_METHOD_ID);

  if (codFlag === "true"  && COD_METHOD_ID) {
    return {
      operations: [
        {
          hide: {
            paymentMethodId: COD_METHOD_ID,
          },
        },
      ],
    };
  }

  return NO_CHANGES;
}

// @ts-check

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
  // const configuration = JSON.parse(
  //   input?.paymentCustomization?.metafield?.value ?? "{}"
    
  // );

  const COUNTRY_CODE = input?.cart?.deliveryGroups[0]?.deliveryAddress?.countryCode
  // const CODE_METHOD_ID = input.paymentMethods?.find(pm => pm.name.includes("COD"))?.id;
  const CODE_METHOD_ID = input.paymentMethods?.find(pm =>
  pm.name.toLowerCase().includes("cod") || pm.name.toLowerCase().includes("Cash on Delivery (COD)")
)?.id;

  console.log("Vikas :) its working...")
  console.log(COUNTRY_CODE, CODE_METHOD_ID);

  if(COUNTRY_CODE === "IN" && CODE_METHOD_ID) {

       return{
      operations: [
        {
          hide:{
            paymentMethodId:CODE_METHOD_ID
          }
        }
      ]
       }

  }

  return NO_CHANGES;
};




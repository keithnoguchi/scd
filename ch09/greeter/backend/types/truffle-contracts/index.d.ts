/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { GreetingContract } from "./Greeting";
import { SampleContractContract } from "./SampleContract";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "Greeting"): GreetingContract;
      require(name: "SampleContract"): SampleContractContract;
    }
  }
}

export { GreetingContract, GreetingInstance } from "./Greeting";
export {
  SampleContractContract,
  SampleContractInstance,
} from "./SampleContract";

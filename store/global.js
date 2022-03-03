import create from "zustand";
import produce from "immer";

const useGlobalState = create((set) => {
  return {
    email: "d25thbamm@gmail.com",
    collectionName: "",
    addresses: [],
    merkleProof: {},
    updateEmailAndName: (value) => {
      set(
        produce((state) => {
          state.email = value.email;
          state.collectionName = value.collectionName;
        })
      );
    },
    updateMerkleProof: (value) => {
      set(
        produce((state) => {
          state.merkleProof = value;
        })
      );
    },
  };
});

export default useGlobalState;

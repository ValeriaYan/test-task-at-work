import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="var(--color-accent)"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        justifyContent: "center",
        alignItems: "center",
        height: '100%'
      }}
      />
  )
}

export default Loader
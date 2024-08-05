export type BannerData = {
  message: string;
  state: "success" | "fail";
};

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "😆" : "😞";
  return (
    <p
      className={`py-2 w-44 text-center rounded-3xl ${
        isSuccess ? "bg-green-300" : "bg-red-400"
      } `}
    >{`${icon} ${message}`}</p>
  );
}

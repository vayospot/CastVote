import Image from "./Image";

export default function ProfileImage({ source, size = 60, rounded = true }) {
  return (
    <Image
      source={source}
      className={`${rounded ? "rounded-full" : ""}`}
      style={{ width: size, height: size }}
      aspectVideo={false}
    />
  );
}

import Image from "next/image";
import PageTitle from "@/components/shared/pageTitle";
import MyWorks from "@/components/shared/home/my-works";
import MyServices from "@/components/shared/home/services";

export default function Home() {
  return (
    <div>
      <PageTitle />

      {/* <MyWorks /> */}
      <MyServices />
    </div>
  );
}

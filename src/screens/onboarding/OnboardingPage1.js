import React, { useEffect, usestate } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

export default function OnboardingPage1() {
  useEffect(() => {
    setPageNum(0);
  }, []);

  const [pageNum, setPageNum] = useState(0);
  return (
    <>
      <Text>안녕하세요.</Text>
      <Text>종이꽃에 오신 걸 환영합니다.</Text>
      <Text>일상의 작은 변화를 지금 만나보세요</Text>

      <Image source={(require = "../../assets/img/flower2_img.png")} />
    </>
  );
}

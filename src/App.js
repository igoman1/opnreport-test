import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import ReactDOM from "react-dom";
import Result from "./pages/Result";

function App() {
    // const [resultData, setResultData] = useState({});

    // const inputHandlerApp = (inputDataApp) => {
    //     setResultData(inputDataApp);
    // };

    const resultData=
    {
        "intro": {
            "department": "성형외과",
            "department_group": "성형외과",
            "address_dong": "논현1동",
            "address_sido_sigungu": "서울특별시 강남구",
            "address_realated_dongs": "논현동",
            "hospital_count": "108개",
            "big_hospital_count": "6개",
            "big_hospital_departments": "치과병원 1개, 병원 5개",
            "sales_reflection": "63%",
            "hospital_table": [
                {
                    "name": "티티성형외과의원",
                    "department": "성형외과",
                    "open_year": "2022년",
                    "area": "92평",
                    "prof": "-"
                },
                {
                    "name": "초이스라인의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "149평",
                    "prof": "-"
                },
                {
                    "name": "링크성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "102평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "미인만들기성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "100평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "365엠씨의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "212평",
                    "prof": "가정의학과 1명"
                },
                {
                    "name": "바나나성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "106평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "진담성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "79평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "바이브성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "149평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "라스트성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "115평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "아너스티성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "90평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "프라이드성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "51평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "정석성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "42평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "팩트성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "60평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "디데이성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "115평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "제이티성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "87평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "잇템성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "126평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "아반트성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "147평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "논현여성의원",
                    "department": "산부인과, 성형외과, 피부과",
                    "open_year": "2020년",
                    "area": "102평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "신상성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "64평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "마크성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "54평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "프린스성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "57평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "더타이트성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "38평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "더니버스성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "62평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "우아인성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "79평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "애프터눈성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "79평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "에이엠성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "58평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "일퍼센트성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "115평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "노즈랩의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "110평",
                    "prof": "이비인후과 1명"
                },
                {
                    "name": "수아이성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "54평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "엣지라인의원",
                    "department": "성형외과",
                    "open_year": "2019년",
                    "area": "50평",
                    "prof": "-"
                },
                {
                    "name": "에이블리성형외과의원",
                    "department": "성형외과",
                    "open_year": "2019년",
                    "area": "64평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "모앤라인성형외과의원",
                    "department": "성형외과",
                    "open_year": "2019년",
                    "area": "116평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "리앤리성형외과의원",
                    "department": "성형외과",
                    "open_year": "2019년",
                    "area": "97평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "에이스타의원",
                    "department": "성형외과",
                    "open_year": "2019년",
                    "area": "46평",
                    "prof": "외과 1명"
                },
                {
                    "name": "아이코닉성형외과의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "58평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "로블에비뉴의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "137평",
                    "prof": "가정의학과 3명, 외과 1명"
                },
                {
                    "name": "청담여신성형외과의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "139평",
                    "prof": "성형외과 3명"
                },
                {
                    "name": "어린공주성형외과의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "32평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "시그니처성형외과의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "41평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "바비라인의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "88평",
                    "prof": "마취통증의학과 1명"
                },
                {
                    "name": "나나성형외과의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "454평",
                    "prof": "성형외과 14명"
                },
                {
                    "name": "이와백성형외과의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "28평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "이지동안의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "98평",
                    "prof": "-"
                },
                {
                    "name": "디바인성형외과의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "46평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "라해의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "44평",
                    "prof": "-"
                },
                {
                    "name": "러블리안성형외과의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "86평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "물방울성형외과의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "43평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "피알성형외과의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "94평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "치유성형외과의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "219평",
                    "prof": "성형외과 3명"
                },
                {
                    "name": "더더블유의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "140평",
                    "prof": "외과 1명"
                },
                {
                    "name": "프라미스성형외과의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "70평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "티제이성형외과의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "66평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "아이리스성형외과의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "43평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "노상훈성형외과의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "219평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "논현어제오늘와이앤티성형외과의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "112평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "강남뷰티성형외과의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "158평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "압구정디오성형외과의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "51평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "스타라인성형외과의원",
                    "department": "성형외과",
                    "open_year": "2016년",
                    "area": "75평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "다나성형외과의원",
                    "department": "성형외과",
                    "open_year": "2016년",
                    "area": "147평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "루비성형외과의원",
                    "department": "성형외과",
                    "open_year": "2016년",
                    "area": "152평",
                    "prof": "가정의학과 1명, 성형외과 1명"
                },
                {
                    "name": "타코성형외과의원",
                    "department": "성형외과",
                    "open_year": "2016년",
                    "area": "65평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "닥터핏의원",
                    "department": "성형외과",
                    "open_year": "2016년",
                    "area": "53평",
                    "prof": "가정의학과 1명"
                },
                {
                    "name": "아이비성형외과의원",
                    "department": "성형외과",
                    "open_year": "2016년",
                    "area": "124평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "신사엘성형외과의원",
                    "department": "성형외과",
                    "open_year": "2016년",
                    "area": "96평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "디바성형외과의원",
                    "department": "성형외과",
                    "open_year": "2015년",
                    "area": "85평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "아이루미성형외과의원",
                    "department": "성형외과",
                    "open_year": "2015년",
                    "area": "96평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "코미인의원",
                    "department": "성형외과",
                    "open_year": "2015년",
                    "area": "80평",
                    "prof": "산부인과 1명"
                },
                {
                    "name": "티에스성형외과의원",
                    "department": "성형외과",
                    "open_year": "2015년",
                    "area": "139평",
                    "prof": "성형외과 6명"
                },
                {
                    "name": "자연주의성형외과의원",
                    "department": "성형외과",
                    "open_year": "2015년",
                    "area": "300평",
                    "prof": "성형외과 4명"
                },
                {
                    "name": "셀라성형외과의원",
                    "department": "성형외과",
                    "open_year": "2014년",
                    "area": "66평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "휴먼성형외과의원",
                    "department": "성형외과",
                    "open_year": "2014년",
                    "area": "165평",
                    "prof": "성형외과 3명"
                },
                {
                    "name": "아르뜨의원",
                    "department": "피부과, 성형외과",
                    "open_year": "2014년",
                    "area": "162평",
                    "prof": "-"
                },
                {
                    "name": "마스크성형외과의원",
                    "department": "성형외과",
                    "open_year": "2014년",
                    "area": "64평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "이노성형외과의원",
                    "department": "성형외과",
                    "open_year": "2013년",
                    "area": "39평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "바탕성형외과의원",
                    "department": "성형외과",
                    "open_year": "2013년",
                    "area": "108평",
                    "prof": "성형외과 3명"
                },
                {
                    "name": "코원성형외과의원",
                    "department": "성형외과",
                    "open_year": "2013년",
                    "area": "57평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "라봄성형외과의원",
                    "department": "성형외과",
                    "open_year": "2013년",
                    "area": "146평",
                    "prof": "성형외과 2명, 이비인후과 1명"
                },
                {
                    "name": "시너지성형외과의원",
                    "department": "성형외과",
                    "open_year": "2012년",
                    "area": "108평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "리코성형외과의원",
                    "department": "성형외과",
                    "open_year": "2011년",
                    "area": "53평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "강남피어리의원",
                    "department": "성형외과, 피부과",
                    "open_year": "2011년",
                    "area": "74평",
                    "prof": "-"
                },
                {
                    "name": "현대미학성형외과(現代美學整形外科)의원",
                    "department": "성형외과",
                    "open_year": "2011년",
                    "area": "202평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "이데아성형외과의원",
                    "department": "성형외과",
                    "open_year": "2011년",
                    "area": "140평",
                    "prof": "성형외과 3명"
                },
                {
                    "name": "게이트성형외과의원",
                    "department": "성형외과",
                    "open_year": "2011년",
                    "area": "111평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "쥬얼리성형외과의원",
                    "department": "성형외과",
                    "open_year": "2010년",
                    "area": "388평",
                    "prof": "성형외과 4명"
                },
                {
                    "name": "씨에프의원",
                    "department": "성형외과",
                    "open_year": "2010년",
                    "area": "42평",
                    "prof": "마취통증의학과 2명"
                },
                {
                    "name": "페이스플러스성형외과의원",
                    "department": "성형외과",
                    "open_year": "2010년",
                    "area": "54평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "봉봉성형외과의원",
                    "department": "성형외과",
                    "open_year": "2009년",
                    "area": "243평",
                    "prof": "성형외과 3명"
                },
                {
                    "name": "웰성형외과의원",
                    "department": "성형외과",
                    "open_year": "2009년",
                    "area": "97평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "렉스성형외과의원",
                    "department": "성형외과",
                    "open_year": "2009년",
                    "area": "79평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "미드림성형외과의원",
                    "department": "성형외과",
                    "open_year": "2007년",
                    "area": "54평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "그림성형외과의원",
                    "department": "성형외과",
                    "open_year": "2007년",
                    "area": "115평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "뷰티라인성형외과의원",
                    "department": "성형외과",
                    "open_year": "2007년",
                    "area": "51평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "클라이만의원",
                    "department": "성형외과",
                    "open_year": "2007년",
                    "area": "94평",
                    "prof": "-"
                },
                {
                    "name": "뷰성형외과의원",
                    "department": "성형외과",
                    "open_year": "2005년",
                    "area": "721평",
                    "prof": "성형외과 10명, 외과 1명"
                },
                {
                    "name": "김한성성형외과의원",
                    "department": "성형외과",
                    "open_year": "2005년",
                    "area": "51평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "미사랑성형외과의원",
                    "department": "성형외과",
                    "open_year": "2003년",
                    "area": "105평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "미소유성형외과의원",
                    "department": "성형외과",
                    "open_year": "2003년",
                    "area": "54평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "연세진성형외과의원",
                    "department": "성형외과",
                    "open_year": "2002년",
                    "area": "72평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "비온성형외과의원",
                    "department": "성형외과",
                    "open_year": "2002년",
                    "area": "64평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "오즈성형외과의원",
                    "department": "성형외과",
                    "open_year": "2002년",
                    "area": "53평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "리본성형외과의원",
                    "department": "성형외과",
                    "open_year": "2002년",
                    "area": "164평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "다미인성형외과의원",
                    "department": "성형외과",
                    "open_year": "2000년",
                    "area": "31평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "4월31일성형외과의원",
                    "department": "성형외과",
                    "open_year": "2000년",
                    "area": "151평",
                    "prof": "성형외과 4명"
                },
                {
                    "name": "조수영성형외과의원",
                    "department": "성형외과",
                    "open_year": "1999년",
                    "area": "61평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "김용현성형외과의원",
                    "department": "성형외과",
                    "open_year": "1999년",
                    "area": "22평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "비케이(BK)성형외과의원",
                    "department": "성형외과",
                    "open_year": "1998년",
                    "area": "418평",
                    "prof": "성형외과 3명"
                },
                {
                    "name": "에이스성형외과의원",
                    "department": "성형외과",
                    "open_year": "1997년",
                    "area": "54평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "안성열성형외과피부과의원",
                    "department": "피부과, 성형외과",
                    "open_year": "1996년",
                    "area": "95평",
                    "prof": "성형외과 1명, 피부과 1명"
                }
            ],
            "hospital_top10_table": [
                {
                    "name": "티티성형외과의원",
                    "department": "성형외과",
                    "open_year": "2022년",
                    "area": "92평",
                    "prof": "-"
                },
                {
                    "name": "초이스라인의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "149평",
                    "prof": "-"
                },
                {
                    "name": "링크성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "102평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "미인만들기성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "100평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "365엠씨의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "212평",
                    "prof": "가정의학과 1명"
                },
                {
                    "name": "바나나성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "106평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "진담성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "79평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "바이브성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "149평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "라스트성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "115평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "아너스티성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "90평",
                    "prof": "성형외과 1명"
                }
            ],
            "big_hospital_table": [
                {
                    "name": "새로운병원",
                    "department": "병원",
                    "open_year": "2021년",
                    "area": "492평",
                    "prof": "가정의학과 1명, 마취통증의학과 1명, 신경외과 1명, 영상의학과 1명, 정형외과 1명"
                },
                {
                    "name": "굿라이프치과병원",
                    "department": "치과병원",
                    "open_year": "2011년",
                    "area": "149평",
                    "prof": "치과교정과 1명, 치과보철과 1명"
                },
                {
                    "name": "아이디병원",
                    "department": "병원",
                    "open_year": "2009년",
                    "area": "2053평",
                    "prof": "마취통증의학과 3명, 성형외과 21명, 치과교정과 3명, 치과보철과 1명, 치주과 1명, 피부과 3명"
                },
                {
                    "name": "비에비스나무병원",
                    "department": "병원",
                    "open_year": "2008년",
                    "area": "1387평",
                    "prof": "가정의학과 1명, 내과 8명, 영상의학과 2명, 외과 2명, 핵의학과 1명"
                },
                {
                    "name": "메드렉스병원",
                    "department": "병원",
                    "open_year": "2008년",
                    "area": "1358평",
                    "prof": "내과 1명, 마취통증의학과 3명, 신경외과 1명, 영상의학과 1명, 정형외과 4명"
                },
                {
                    "name": "김정수여러분병원",
                    "department": "병원",
                    "open_year": "2005년",
                    "area": "258평",
                    "prof": "신경외과 1명, 영상의학과 1명"
                }
            ],
            "hospital_headers": [
                {
                    "name": "사업장명",
                    "department": "진료과",
                    "open_year": "개원년도",
                    "area": "면적",
                    "prof": "전문의"
                }
            ]
        },
        "market_analysis": {
            "market_size": "108억 7400만원",
            "market_trend": "증가",
            "hospital_count_past": "100개",
            "hospital_count_now": "108개",
            "hospital_count_trend": "증가",
            "profit_per_area_size": "131만원",
            "profit_per_area_trend": "증가",
            "address_dong": "논현1동",
            "department": "성형외과",
            "market_max_size": "181억 805만원",
            "market_max_year": "2022년",
            "market_max_month": "1월",
            "market_min_size": "80억 2542만원",
            "market_min_year": "2021년",
            "market_min_month": "6월",
            "3y_trend_start_year": "2020년",
            "3y_trend_start_market_size": "87억 7926만원",
            "3y_trend_end_year": "2022년",
            "3y_trend_end_market_size": "124억 3806만원",
            "3y_trend_percent": "42%",
            "3y_trend_hospital_count_difference": "8개",
            "profit_per_50p": "6550만원",
            "3y_trend_profit_per_area_start_year": "2020년",
            "3y_trend_profit_per_area_start_market_size": "132만원",
            "3y_trend_profit_per_area_end_year": "2022년",
            "3y_trend_profit_per_area_end_market_size": "145만원",
            "3y_trend_profit_per_area_percent": "10%",
            "market_size_short_trend": [
                {
                    "class": "2021년 6월",
                    "value": 802542
                },
                {
                    "class": "2021년 7월",
                    "value": 898295
                },
                {
                    "class": "2021년 8월",
                    "value": 830722
                },
                {
                    "class": "2021년 9월",
                    "value": 1092577
                },
                {
                    "class": "2021년 10월",
                    "value": 893380
                },
                {
                    "class": "2021년 11월",
                    "value": 985729
                },
                {
                    "class": "2021년 12월",
                    "value": 1326522
                },
                {
                    "class": "2022년 1월",
                    "value": 1810805
                },
                {
                    "class": "2022년 2월",
                    "value": 1207767
                },
                {
                    "class": "2022년 3월",
                    "value": 1002138
                },
                {
                    "class": "2022년 4월",
                    "value": 1126280
                },
                {
                    "class": "2022년 5월",
                    "value": 1072039
                }
            ],
            "market_size_long_trend": [
                {
                    "class": "2020년",
                    "value": 877926
                },
                {
                    "class": "2021년",
                    "value": 982489
                },
                {
                    "class": "2022년",
                    "value": 1243806
                }
            ],
            "hospital_count_short_trend": [
                {
                    "class": "2021년 2분기",
                    "value": 104
                },
                {
                    "class": "2021년 3분기",
                    "value": 108
                },
                {
                    "class": "2021년 4분기",
                    "value": 109
                },
                {
                    "class": "2022년 1분기",
                    "value": 108
                }
            ],
            "hospital_count_long_trend": [
                {
                    "class": "2020년",
                    "value": 100
                },
                {
                    "class": "2021년",
                    "value": 109
                },
                {
                    "class": "2022년",
                    "value": 108
                }
            ],
            "profit_per_area_short_trend": [
                {
                    "class": "2021년 6월",
                    "value": 106
                },
                {
                    "class": "2021년 7월",
                    "value": 115
                },
                {
                    "class": "2021년 8월",
                    "value": 106
                },
                {
                    "class": "2021년 9월",
                    "value": 136
                },
                {
                    "class": "2021년 10월",
                    "value": 116
                },
                {
                    "class": "2021년 11월",
                    "value": 118
                },
                {
                    "class": "2021년 12월",
                    "value": 152
                },
                {
                    "class": "2022년 1월",
                    "value": 205
                },
                {
                    "class": "2022년 2월",
                    "value": 142
                },
                {
                    "class": "2022년 3월",
                    "value": 118
                },
                {
                    "class": "2022년 4월",
                    "value": 131
                },
                {
                    "class": "2022년 5월",
                    "value": 128
                }
            ],
            "profit_per_area_long_trend": [
                {
                    "class": "2020년",
                    "value": 132
                },
                {
                    "class": "2021년",
                    "value": 127
                },
                {
                    "class": "2022년",
                    "value": 145
                }
            ]
        },
        "competitive_analysis": {
            "all_hospital_average_profit": "1억 3620만원",
            "new_hospital_average_profit": "1억 9871만원",
            "competition_type": "치열함",
            "competition_rate": "0.04로",
            "address_dong": "논현1동",
            "department": "성형외과",
            "new_hospital_count": "15개",
            "all_to_new_compare": "높습니다",
            "hospital_profit_distribution_chart": [
                {
                    "class": "의원1",
                    "value": 163252
                },
                {
                    "class": "의원2",
                    "value": 96729
                },
                {
                    "class": "의원3",
                    "value": 44348
                },
                {
                    "class": "의원4",
                    "value": 40816
                },
                {
                    "class": "의원5",
                    "value": 32950
                },
                {
                    "class": "의원6",
                    "value": 27015
                },
                {
                    "class": "의원7",
                    "value": 26320
                },
                {
                    "class": "의원8",
                    "value": 25039
                },
                {
                    "class": "의원9",
                    "value": 24063
                },
                {
                    "class": "의원10",
                    "value": 21746
                }
            ],
            "competition_table": [
                {
                    "profit": "16억 3252만원",
                    "acquisition_rate": "16%",
                    "rate_squared": 0.03
                },
                {
                    "profit": "9억 6729만원",
                    "acquisition_rate": "9%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "4억 4348만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "4억 816만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "3억 2950만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "2억 7015만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "2억 6320만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "2억 5039만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "2억 4063만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "2억 1746만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "2억 1433만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 9964만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 9692만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 8550만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 8131만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 6553만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 6197만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 5896만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 5624만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 5477만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 5294만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 5186만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 5009만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 3557만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 3195만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 1580만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 1215만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 965만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 785만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 760만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "9850만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "9459만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "9371만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "9184만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "9015만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "8981만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "8650만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "8622만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "8221만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "8004만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "7751만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "7712만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "7397만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "7313만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "7301만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "6206만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "5968만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "5679만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "5313만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "5258만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "4945만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "4841만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "4831만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "4734만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "4515만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "4418만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "4399만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "4249만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "4178만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "4064만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "3997만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "3993만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "3967만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "3903만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "3852만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "3429만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "2369만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "2234만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "2186만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "1903만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "1874만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "1860만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "1522만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "1472만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "1219만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "707만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                },
                {
                    "profit": "536만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                }
            ],
            "competition_top10_table": [
                {
                    "profit": "16억 3252만원",
                    "acquisition_rate": "16%",
                    "rate_squared": 0.03
                },
                {
                    "profit": "9억 6729만원",
                    "acquisition_rate": "9%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "4억 4348만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "4억 816만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "3억 2950만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "2억 7015만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "2억 6320만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "2억 5039만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "2억 4063만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "2억 1746만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                }
            ],
            "competition_rest_info": [
                {
                    "rest_hospital_count": 67,
                    "rate_sum_top10": 48,
                    "rate_squared_sum_top10": 0.04,
                    "rate_sum_rest": 48,
                    "rate_squared_sum_rest": 0
                }
            ],
            "new_hospital_headers": [
                {
                    "open_date": "개업일자",
                    "hospital_name": "상호명",
                    "area": "면적(평)",
                    "prof": "전문의"
                }
            ],
            "new_hospital_table": [
                {
                    "open_date": "2021년 11월 17일",
                    "hospital_name": "이데아성형외과의원",
                    "area": "140평",
                    "prof": "성형외과 3명"
                },
                {
                    "open_date": "2021년 11월 02일",
                    "hospital_name": "바이브성형외과의원",
                    "area": "149평",
                    "prof": "성형외과 1명"
                },
                {
                    "open_date": "2021년 09월 02일",
                    "hospital_name": "나나성형외과의원",
                    "area": "455평",
                    "prof": "성형외과 14명"
                },
                {
                    "open_date": "2021년 08월 23일",
                    "hospital_name": "에이엠성형외과의원",
                    "area": "58평",
                    "prof": "성형외과 1명"
                },
                {
                    "open_date": "2021년 08월 17일",
                    "hospital_name": "더니버스성형외과의원",
                    "area": "62평",
                    "prof": "성형외과 1명"
                },
                {
                    "open_date": "2021년 07월 15일",
                    "hospital_name": "비온성형외과의원",
                    "area": "64평",
                    "prof": "성형외과 1명"
                },
                {
                    "open_date": "2021년 07월 14일",
                    "hospital_name": "렉스성형외과의원",
                    "area": "79평",
                    "prof": "성형외과 1명"
                },
                {
                    "open_date": "2021년 03월 25일",
                    "hospital_name": "리본성형외과의원",
                    "area": "164평",
                    "prof": "성형외과 1명"
                },
                {
                    "open_date": "2020년 12월 30일",
                    "hospital_name": "에이스성형외과의원",
                    "area": "54평",
                    "prof": "성형외과 1명"
                },
                {
                    "open_date": "2020년 11월 16일",
                    "hospital_name": "뷰티라인성형외과의원",
                    "area": "52평",
                    "prof": "성형외과 2명"
                },
                {
                    "open_date": "2020년 10월 30일",
                    "hospital_name": "디데이성형외과의원",
                    "area": "116평",
                    "prof": "성형외과 1명"
                },
                {
                    "open_date": "2020년 09월 21일",
                    "hospital_name": "미소유성형외과의원",
                    "area": "55평",
                    "prof": "성형외과 1명"
                },
                {
                    "open_date": "2020년 08월 26일",
                    "hospital_name": "리앤리성형외과의원",
                    "area": "97평",
                    "prof": "성형외과 2명"
                },
                {
                    "open_date": "2020년 08월 05일",
                    "hospital_name": "휴먼성형외과의원",
                    "area": "166평",
                    "prof": "성형외과 3명"
                },
                {
                    "open_date": "2020년 07월 13일",
                    "hospital_name": "마스크성형외과의원",
                    "area": "64평",
                    "prof": "성형외과 1명"
                }
            ],
            "closed_hospital_headers": [
                {
                    "open_date": "개업일자",
                    "closed_date": "폐업일자",
                    "hospital_name": "상호명",
                    "area": "면적(평)"
                }
            ],
            "closed_hospital_table": [
                {
                    "open_date": "2011년 03월 25일",
                    "closed_date": "2022년 04월 29일",
                    "hospital_name": "게이트성형외과의원",
                    "area": "112평"
                },
                {
                    "open_date": "2018년 11월 21일",
                    "closed_date": "2022년 04월 05일",
                    "hospital_name": "에프5성형외과의원",
                    "area": "61평"
                },
                {
                    "open_date": "2017년 12월 01일",
                    "closed_date": "2022년 03월 07일",
                    "hospital_name": "리앤성형외과의원",
                    "area": "115평"
                },
                {
                    "open_date": "2017년 01월 24일",
                    "closed_date": "2021년 12월 01일",
                    "hospital_name": "드림라인의원",
                    "area": "115평"
                },
                {
                    "open_date": "2020년 09월 21일",
                    "closed_date": "2021년 10월 05일",
                    "hospital_name": "미인만들기성형외과의원",
                    "area": "107평"
                },
                {
                    "open_date": "2011년 06월 20일",
                    "closed_date": "2021년 02월 21일",
                    "hospital_name": "아이템성형외과의원",
                    "area": "172평"
                },
                {
                    "open_date": "2014년 04월 14일",
                    "closed_date": "2020년 11월 23일",
                    "hospital_name": "논현여성성형외과의원",
                    "area": "102평"
                },
                {
                    "open_date": "2019년 08월 30일",
                    "closed_date": "2020년 10월 16일",
                    "hospital_name": "더타임성형외과의원",
                    "area": "26평"
                }
            ]
        },
        "user_analysis": {
            "major_customer_age_sex": "20대 여성",
            "major_customer_profit": "4천~6천만원",
            "major_customer_profit_ratio": "39%",
            "average_profit_per_customer": "73만 1132원",
            "address_dong": "논현1동",
            "department": "성형외과",
            "customer_male_ratio": "23%",
            "customer_female_ratio": "77%",
            "sex_compare": "여성",
            "male_max_count_age": "30대로",
            "male_max_count_ratio": "28%",
            "female_max_count_age": "20대로",
            "female_max_count_ratio": "34%",
            "max_average_profit_per_customer": "89만 8707원",
            "max_average_profit_per_customer_year": "2022년",
            "max_average_profit_per_customer_month": "1월",
            "min_average_profit_per_customer": "64만 9542원",
            "min_average_profit_per_customer_year": "2021년",
            "min_average_profit_per_customer_month": "10월",
            "3year_trend_early_size": "74만 1506원",
            "3year_trend_late_size": "77만 1552원",
            "3year_trend_percent": "5%",
            "3year_trend_compare": "증가",
            "sex_distribution_chart": [
                {
                    "class": "남성",
                    "value": 23
                },
                {
                    "class": "여성",
                    "value": 77
                }
            ],
            "male_age_distribution_chart": [
                {
                    "class": "20대",
                    "value": 16
                },
                {
                    "class": "30대",
                    "value": 28
                },
                {
                    "class": "40대",
                    "value": 22
                },
                {
                    "class": "50대",
                    "value": 26
                },
                {
                    "class": "60대 이상",
                    "value": 9
                }
            ],
            "female_age_distribution_chart": [
                {
                    "class": "20대",
                    "value": 34
                },
                {
                    "class": "30대",
                    "value": 25
                },
                {
                    "class": "40대",
                    "value": 18
                },
                {
                    "class": "50대",
                    "value": 17
                },
                {
                    "class": "60대 이상",
                    "value": 6
                }
            ],
            "customer_profit_distribution_chart": [
                {
                    "class": "정보 없음",
                    "value": 3
                },
                {
                    "class": "2천만원 미만",
                    "value": 2
                },
                {
                    "class": "2000만원~3000만원",
                    "value": 0
                },
                {
                    "class": "3000만원~4000만원",
                    "value": 22
                },
                {
                    "class": "4000만원~6000만원",
                    "value": 39
                },
                {
                    "class": "6000만원~8000만원",
                    "value": 16
                },
                {
                    "class": "8000만원~1억원",
                    "value": 9
                },
                {
                    "class": "1억원 이상",
                    "value": 9
                }
            ],
            "average_profit_per_customer_short_chart": [
                {
                    "class": "2021년 6월",
                    "value": 672371
                },
                {
                    "class": "2021년 7월",
                    "value": 672880
                },
                {
                    "class": "2021년 8월",
                    "value": 660141
                },
                {
                    "class": "2021년 9월",
                    "value": 822538
                },
                {
                    "class": "2021년 10월",
                    "value": 649542
                },
                {
                    "class": "2021년 11월",
                    "value": 663255
                },
                {
                    "class": "2021년 12월",
                    "value": 744066
                },
                {
                    "class": "2022년 1월",
                    "value": 898707
                },
                {
                    "class": "2022년 2월",
                    "value": 813750
                },
                {
                    "class": "2022년 3월",
                    "value": 707026
                },
                {
                    "class": "2022년 4월",
                    "value": 737287
                },
                {
                    "class": "2022년 5월",
                    "value": 732017
                }
            ],
            "average_profit_per_customer_long_chart": [
                {
                    "class": "2020년",
                    "value": 741506
                },
                {
                    "class": "2021년",
                    "value": 707664
                },
                {
                    "class": "2022년",
                    "value": 777757
                }
            ]
        }
    }


    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route
                        path="/"
                        element={<Home inputHandlerApp={inputHandlerApp} />}
                    /> */}
                    <Route
                        path="/"
                        element={<Result data={resultData} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

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
            "address_dong": "잠원동",
            "address_sido_sigungu": "서울특별시 서초구",
            "address_realated_dongs": "잠원동",
            "hospital_count": "31개",
            "big_hospital_count": "0개",
            "big_hospital_departments": "",
            "sales_reflection": "63%",
            "hospital_table": [
                {
                    "name": "웨이브의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "92평",
                    "prof": "이비인후과 1명"
                },
                {
                    "name": "당김성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "69평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "마노성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "98평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "쁠리성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "154평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "오엠성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "127평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "원픽성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "95평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "에스와이(SY)성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "50평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "레디성형외과의원",
                    "department": "성형외과",
                    "open_year": "2019년",
                    "area": "79평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "노트성형외과의원",
                    "department": "성형외과",
                    "open_year": "2019년",
                    "area": "241평",
                    "prof": "성형외과 5명, 피부과 1명"
                },
                {
                    "name": "탑티어성형외과의원",
                    "department": "성형외과",
                    "open_year": "2019년",
                    "area": "89평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "하이봄성형외과의원",
                    "department": "성형외과",
                    "open_year": "2019년",
                    "area": "96평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "리필톡의원",
                    "department": "성형외과",
                    "open_year": "2019년",
                    "area": "81평",
                    "prof": "산부인과 1명"
                },
                {
                    "name": "멜로디성형외과의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "82평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "얼굴본성형외과의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "100평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "모플러스성형외과의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "64평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "카라멜성형외과의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "101평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "바이미성형외과의원",
                    "department": "성형외과",
                    "open_year": "2018년",
                    "area": "43평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "제이디의원",
                    "department": "성형외과, 피부과",
                    "open_year": "2017년",
                    "area": "74평",
                    "prof": "산부인과 1명"
                },
                {
                    "name": "비씨아이성형외과의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "62평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "플라덴성형외과의원",
                    "department": "성형외과",
                    "open_year": "2017년",
                    "area": "112평",
                    "prof": "성형외과 3명"
                },
                {
                    "name": "본아이성형외과의원",
                    "department": "성형외과",
                    "open_year": "2016년",
                    "area": "56평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "밴스의원",
                    "department": "피부과, 성형외과",
                    "open_year": "2015년",
                    "area": "190평",
                    "prof": "가정의학과 2명"
                },
                {
                    "name": "그레이스오앤영성형외과의원",
                    "department": "성형외과",
                    "open_year": "2014년",
                    "area": "123평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "이미지업성형외과의원",
                    "department": "성형외과",
                    "open_year": "2014년",
                    "area": "123평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "유니크성형외과의원",
                    "department": "성형외과",
                    "open_year": "2013년",
                    "area": "114평",
                    "prof": "성형외과 3명"
                },
                {
                    "name": "룩앤미성형외과의원",
                    "department": "성형외과",
                    "open_year": "2013년",
                    "area": "29평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "바로일성형외과의원",
                    "department": "성형외과",
                    "open_year": "2011년",
                    "area": "97평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "보니따의원",
                    "department": "성형외과, 피부과",
                    "open_year": "2008년",
                    "area": "167평",
                    "prof": "-"
                },
                {
                    "name": "압구정트랜드성형외과의원",
                    "department": "성형외과",
                    "open_year": "2007년",
                    "area": "110평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "볼륨성형외과의원",
                    "department": "성형외과",
                    "open_year": "2007년",
                    "area": "71평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "어셈블성형외과의원",
                    "department": "성형외과",
                    "open_year": "2002년",
                    "area": "91평",
                    "prof": "성형외과 2명"
                }
            ],
            "hospital_top10_table": [
                {
                    "name": "웨이브의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "92평",
                    "prof": "이비인후과 1명"
                },
                {
                    "name": "당김성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "69평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "마노성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "98평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "쁠리성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "154평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "오엠성형외과의원",
                    "department": "성형외과",
                    "open_year": "2021년",
                    "area": "127평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "원픽성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "95평",
                    "prof": "성형외과 2명"
                },
                {
                    "name": "에스와이(SY)성형외과의원",
                    "department": "성형외과",
                    "open_year": "2020년",
                    "area": "50평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "레디성형외과의원",
                    "department": "성형외과",
                    "open_year": "2019년",
                    "area": "79평",
                    "prof": "성형외과 1명"
                },
                {
                    "name": "노트성형외과의원",
                    "department": "성형외과",
                    "open_year": "2019년",
                    "area": "241평",
                    "prof": "성형외과 5명, 피부과 1명"
                },
                {
                    "name": "탑티어성형외과의원",
                    "department": "성형외과",
                    "open_year": "2019년",
                    "area": "89평",
                    "prof": "성형외과 1명"
                }
            ],
            "big_hospital_table": [],
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
            "market_size": "36억 1579만원",
            "market_trend": "증가",
            "hospital_count_past": "26개",
            "hospital_count_now": "31개",
            "hospital_count_trend": "증가",
            "profit_per_area_size": "151만원",
            "profit_per_area_trend": "증가",
            "address_dong": "잠원동",
            "department": "성형외과",
            "market_max_size": "57억 1797만원",
            "market_max_year": "2022년",
            "market_max_month": "1월",
            "market_min_size": "26억 6441만원",
            "market_min_year": "2021년",
            "market_min_month": "6월",
            "3y_trend_start_year": "2020년",
            "3y_trend_start_market_size": "23억 3220만원",
            "3y_trend_end_year": "2022년",
            "3y_trend_end_market_size": "40억 5755만원",
            "3y_trend_percent": "74%",
            "3y_trend_hospital_count_difference": "5개",
            "profit_per_50p": "7550만원",
            "3y_trend_profit_per_area_start_year": "2020년",
            "3y_trend_profit_per_area_start_market_size": "123만원",
            "3y_trend_profit_per_area_end_year": "2022년",
            "3y_trend_profit_per_area_end_market_size": "170만원",
            "3y_trend_profit_per_area_percent": "38%",
            "market_size_short_trend": [
                {
                    "class": "2021년 6월",
                    "value": 266441
                },
                {
                    "class": "2021년 7월",
                    "value": 341807
                },
                {
                    "class": "2021년 8월",
                    "value": 285816
                },
                {
                    "class": "2021년 9월",
                    "value": 304425
                },
                {
                    "class": "2021년 10월",
                    "value": 311395
                },
                {
                    "class": "2021년 11월",
                    "value": 344958
                },
                {
                    "class": "2021년 12월",
                    "value": 455335
                },
                {
                    "class": "2022년 1월",
                    "value": 571797
                },
                {
                    "class": "2022년 2월",
                    "value": 361835
                },
                {
                    "class": "2022년 3월",
                    "value": 339670
                },
                {
                    "class": "2022년 4월",
                    "value": 367031
                },
                {
                    "class": "2022년 5월",
                    "value": 388444
                }
            ],
            "market_size_long_trend": [
                {
                    "class": "2020년",
                    "value": 233220
                },
                {
                    "class": "2021년",
                    "value": 315274
                },
                {
                    "class": "2022년",
                    "value": 405755
                }
            ],
            "hospital_count_short_trend": [
                {
                    "class": "2021년 2분기",
                    "value": 27
                },
                {
                    "class": "2021년 3분기",
                    "value": 28
                },
                {
                    "class": "2021년 4분기",
                    "value": 30
                },
                {
                    "class": "2022년 1분기",
                    "value": 31
                }
            ],
            "hospital_count_long_trend": [
                {
                    "class": "2020년",
                    "value": 26
                },
                {
                    "class": "2021년",
                    "value": 30
                },
                {
                    "class": "2022년",
                    "value": 31
                }
            ],
            "profit_per_area_short_trend": [
                {
                    "class": "2021년 6월",
                    "value": 122
                },
                {
                    "class": "2021년 7월",
                    "value": 140
                },
                {
                    "class": "2021년 8월",
                    "value": 122
                },
                {
                    "class": "2021년 9월",
                    "value": 123
                },
                {
                    "class": "2021년 10월",
                    "value": 131
                },
                {
                    "class": "2021년 11월",
                    "value": 139
                },
                {
                    "class": "2021년 12월",
                    "value": 185
                },
                {
                    "class": "2022년 1월",
                    "value": 231
                },
                {
                    "class": "2022년 2월",
                    "value": 156
                },
                {
                    "class": "2022년 3월",
                    "value": 142
                },
                {
                    "class": "2022년 4월",
                    "value": 158
                },
                {
                    "class": "2022년 5월",
                    "value": 163
                }
            ],
            "profit_per_area_long_trend": [
                {
                    "class": "2020년",
                    "value": 123
                },
                {
                    "class": "2021년",
                    "value": 137
                },
                {
                    "class": "2022년",
                    "value": 170
                }
            ]
        },
        "competitive_analysis": {
            "all_hospital_average_profit": "1억 5177만원",
            "new_hospital_average_profit": "9780만원",
            "competition_type": "치열함",
            "competition_rate": "0.07로",
            "address_dong": "잠원동",
            "department": "성형외과",
            "new_hospital_count": "5개",
            "all_to_new_compare": "낮습니다",
            "hospital_profit_distribution_chart": [
                {
                    "class": "의원1",
                    "value": 78132
                },
                {
                    "class": "의원2",
                    "value": 37716
                },
                {
                    "class": "의원3",
                    "value": 25307
                },
                {
                    "class": "의원4",
                    "value": 20955
                },
                {
                    "class": "의원5",
                    "value": 20161
                },
                {
                    "class": "의원6",
                    "value": 19010
                },
                {
                    "class": "의원7",
                    "value": 14518
                },
                {
                    "class": "의원8",
                    "value": 13967
                },
                {
                    "class": "의원9",
                    "value": 13555
                },
                {
                    "class": "의원10",
                    "value": 13548
                }
            ],
            "competition_table": [
                {
                    "profit": "7억 8132만원",
                    "acquisition_rate": "23%",
                    "rate_squared": 0.05
                },
                {
                    "profit": "3억 7716만원",
                    "acquisition_rate": "11%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "2억 5307만원",
                    "acquisition_rate": "8%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "2억 955만원",
                    "acquisition_rate": "6%",
                    "rate_squared": 0
                },
                {
                    "profit": "2억 161만원",
                    "acquisition_rate": "6%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 9010만원",
                    "acquisition_rate": "6%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 4518만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 3967만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 3555만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 3548만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 2758만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 2611만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "8170만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "7860만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "7701만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "6111만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "6008만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "5365만원",
                    "acquisition_rate": "2%",
                    "rate_squared": 0
                },
                {
                    "profit": "4177만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "3216만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "2360만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "705만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                }
            ],
            "competition_top10_table": [
                {
                    "profit": "7억 8132만원",
                    "acquisition_rate": "23%",
                    "rate_squared": 0.05
                },
                {
                    "profit": "3억 7716만원",
                    "acquisition_rate": "11%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "2억 5307만원",
                    "acquisition_rate": "8%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "2억 955만원",
                    "acquisition_rate": "6%",
                    "rate_squared": 0
                },
                {
                    "profit": "2억 161만원",
                    "acquisition_rate": "6%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 9010만원",
                    "acquisition_rate": "6%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 4518만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 3967만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 3555만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 3548만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                }
            ],
            "competition_rest_info": [
                {
                    "rest_hospital_count": 12,
                    "rate_sum_top10": 76,
                    "rate_squared_sum_top10": 0.07,
                    "rate_sum_rest": 23,
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
                    "open_date": "2021년 11월 10일",
                    "hospital_name": "얼굴본성형외과의원",
                    "area": "100평",
                    "prof": "성형외과 1명"
                },
                {
                    "open_date": "2021년 09월 01일",
                    "hospital_name": "유니크성형외과의원",
                    "area": "114평",
                    "prof": "성형외과 3명"
                },
                {
                    "open_date": "2021년 06월 01일",
                    "hospital_name": "볼륨성형외과의원",
                    "area": "71평",
                    "prof": "성형외과 1명"
                },
                {
                    "open_date": "2021년 01월 26일",
                    "hospital_name": "바로일성형외과의원",
                    "area": "98평",
                    "prof": "성형외과 1명"
                },
                {
                    "open_date": "2020년 09월 02일",
                    "hospital_name": "당김성형외과의원",
                    "area": "70평",
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
                    "open_date": "2007년 07월 19일",
                    "closed_date": "2022년 04월 16일",
                    "hospital_name": "트랜드성형외과의원",
                    "area": "110평"
                },
                {
                    "open_date": "2011년 04월 08일",
                    "closed_date": "2021년 08월 28일",
                    "hospital_name": "휴먼성형외과의원",
                    "area": "128평"
                },
                {
                    "open_date": "2010년 12월 03일",
                    "closed_date": "2021년 01월 16일",
                    "hospital_name": "작은얼굴성형외과의원",
                    "area": "96평"
                },
                {
                    "open_date": "2016년 03월 02일",
                    "closed_date": "2020년 08월 25일",
                    "hospital_name": "더제이의원",
                    "area": "160평"
                }
            ]
        },
        "user_analysis": {
            "major_customer_age_sex": "20대 여성",
            "major_customer_profit": "4천~6천만원",
            "major_customer_profit_ratio": "40%",
            "average_profit_per_customer": "68만 9142원",
            "address_dong": "잠원동",
            "department": "성형외과",
            "customer_male_ratio": "19%",
            "customer_female_ratio": "81%",
            "sex_compare": "여성",
            "male_max_count_age": "50대로",
            "male_max_count_ratio": "32%",
            "female_max_count_age": "20대로",
            "female_max_count_ratio": "38%",
            "max_average_profit_per_customer": "87만 6183원",
            "max_average_profit_per_customer_year": "2022년",
            "max_average_profit_per_customer_month": "1월",
            "min_average_profit_per_customer": "54만 8233원",
            "min_average_profit_per_customer_year": "2021년",
            "min_average_profit_per_customer_month": "6월",
            "3year_trend_early_size": "57만 9500원",
            "3year_trend_late_size": "73만 8448원",
            "3year_trend_percent": "26%",
            "3year_trend_compare": "증가",
            "sex_distribution_chart": [
                {
                    "class": "남성",
                    "value": 19
                },
                {
                    "class": "여성",
                    "value": 81
                }
            ],
            "male_age_distribution_chart": [
                {
                    "class": "20대",
                    "value": 16
                },
                {
                    "class": "30대",
                    "value": 22
                },
                {
                    "class": "40대",
                    "value": 19
                },
                {
                    "class": "50대",
                    "value": 32
                },
                {
                    "class": "60대 이상",
                    "value": 11
                }
            ],
            "female_age_distribution_chart": [
                {
                    "class": "20대",
                    "value": 38
                },
                {
                    "class": "30대",
                    "value": 25
                },
                {
                    "class": "40대",
                    "value": 17
                },
                {
                    "class": "50대",
                    "value": 14
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
                    "value": 23
                },
                {
                    "class": "4000만원~6000만원",
                    "value": 40
                },
                {
                    "class": "6000만원~8000만원",
                    "value": 15
                },
                {
                    "class": "8000만원~1억원",
                    "value": 8
                },
                {
                    "class": "1억원 이상",
                    "value": 10
                }
            ],
            "average_profit_per_customer_short_chart": [
                {
                    "class": "2021년 6월",
                    "value": 548233
                },
                {
                    "class": "2021년 7월",
                    "value": 672318
                },
                {
                    "class": "2021년 8월",
                    "value": 617447
                },
                {
                    "class": "2021년 9월",
                    "value": 696624
                },
                {
                    "class": "2021년 10월",
                    "value": 652137
                },
                {
                    "class": "2021년 11월",
                    "value": 673746
                },
                {
                    "class": "2021년 12월",
                    "value": 751378
                },
                {
                    "class": "2022년 1월",
                    "value": 876183
                },
                {
                    "class": "2022년 2월",
                    "value": 676706
                },
                {
                    "class": "2022년 3월",
                    "value": 730315
                },
                {
                    "class": "2022년 4월",
                    "value": 655412
                },
                {
                    "class": "2022년 5월",
                    "value": 719208
                }
            ],
            "average_profit_per_customer_long_chart": [
                {
                    "class": "2020년",
                    "value": 579500
                },
                {
                    "class": "2021년",
                    "value": 659441
                },
                {
                    "class": "2022년",
                    "value": 731565
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

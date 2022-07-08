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
            "department": "치과",
            "department_group": "치과",
            "address_dong": "오전동",
            "address_sido_sigungu": "경기도 의왕시",
            "address_realated_dongs": "오전동",
            "hospital_count": "12개",
            "big_hospital_count": "3개",
            "big_hospital_departments": "요양병원 2개, 병원 1개",
            "sales_reflection": "58%",
            "hospital_table": [
                {
                    "name": "굿플란트치과의원",
                    "department": "치과",
                    "open_year": "2021년",
                    "area": "34평",
                    "prof": "치과보존과 1명, 통합치의학과 1명"
                },
                {
                    "name": "이다운치과의원",
                    "department": "치과",
                    "open_year": "2013년",
                    "area": "46평",
                    "prof": "-"
                },
                {
                    "name": "오케이치과의원",
                    "department": "치과",
                    "open_year": "2012년",
                    "area": "48평",
                    "prof": "-"
                },
                {
                    "name": "사람과치과의원",
                    "department": "치과",
                    "open_year": "2012년",
                    "area": "56평",
                    "prof": "-"
                },
                {
                    "name": "굿모닝치과의원",
                    "department": "치과",
                    "open_year": "2011년",
                    "area": "54평",
                    "prof": "-"
                },
                {
                    "name": "의왕예치과의원",
                    "department": "치과",
                    "open_year": "2006년",
                    "area": "72평",
                    "prof": "-"
                },
                {
                    "name": "웰빙명인치과의원",
                    "department": "치과",
                    "open_year": "2006년",
                    "area": "42평",
                    "prof": "-"
                },
                {
                    "name": "조은치과의원",
                    "department": "치과",
                    "open_year": "2000년",
                    "area": "21평",
                    "prof": "-"
                },
                {
                    "name": "노박치과의원",
                    "department": "치과",
                    "open_year": "2000년",
                    "area": "24평",
                    "prof": "-"
                },
                {
                    "name": "하나치과의원",
                    "department": "치과",
                    "open_year": "1999년",
                    "area": "18평",
                    "prof": "-"
                },
                {
                    "name": "정진숙치과의원",
                    "department": "치과",
                    "open_year": "1996년",
                    "area": "0평",
                    "prof": "-"
                },
                {
                    "name": "박일윤치과의원",
                    "department": "치과",
                    "open_year": "1990년",
                    "area": "34평",
                    "prof": "-"
                }
            ],
            "hospital_top10_table": [
                {
                    "name": "굿플란트치과의원",
                    "department": "치과",
                    "open_year": "2021년",
                    "area": "34평",
                    "prof": "치과보존과 1명, 통합치의학과 1명"
                },
                {
                    "name": "이다운치과의원",
                    "department": "치과",
                    "open_year": "2013년",
                    "area": "46평",
                    "prof": "-"
                },
                {
                    "name": "오케이치과의원",
                    "department": "치과",
                    "open_year": "2012년",
                    "area": "48평",
                    "prof": "-"
                },
                {
                    "name": "사람과치과의원",
                    "department": "치과",
                    "open_year": "2012년",
                    "area": "56평",
                    "prof": "-"
                },
                {
                    "name": "굿모닝치과의원",
                    "department": "치과",
                    "open_year": "2011년",
                    "area": "54평",
                    "prof": "-"
                },
                {
                    "name": "의왕예치과의원",
                    "department": "치과",
                    "open_year": "2006년",
                    "area": "72평",
                    "prof": "-"
                },
                {
                    "name": "웰빙명인치과의원",
                    "department": "치과",
                    "open_year": "2006년",
                    "area": "42평",
                    "prof": "-"
                },
                {
                    "name": "조은치과의원",
                    "department": "치과",
                    "open_year": "2000년",
                    "area": "21평",
                    "prof": "-"
                },
                {
                    "name": "노박치과의원",
                    "department": "치과",
                    "open_year": "2000년",
                    "area": "24평",
                    "prof": "-"
                },
                {
                    "name": "하나치과의원",
                    "department": "치과",
                    "open_year": "1999년",
                    "area": "18평",
                    "prof": "-"
                }
            ],
            "big_hospital_table": [
                {
                    "name": "의료법인대성의료재단 한림예요양병원",
                    "department": "요양병원",
                    "open_year": "2014년",
                    "area": "263평",
                    "prof": "가정의학과 2명, 외과 1명"
                },
                {
                    "name": "아가페의료재단 시티병원",
                    "department": "병원",
                    "open_year": "2013년",
                    "area": "2203평",
                    "prof": "가정의학과 1명, 내과 3명, 신경과 1명, 영상의학과 1명, 외과 1명, 정형외과 2명"
                },
                {
                    "name": "우리효요양병원",
                    "department": "요양병원",
                    "open_year": "2008년",
                    "area": "1076평",
                    "prof": "내과 1명, 외과 2명"
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
            "market_size": "2억 7941만원",
            "market_trend": "증가",
            "hospital_count_past": "11개",
            "hospital_count_now": "12개",
            "hospital_count_trend": "증가",
            "profit_per_area_size": "67만원",
            "profit_per_area_trend": "증가",
            "address_dong": "오전동",
            "department": "치과",
            "market_max_size": "3억 6361만원",
            "market_max_year": "2021년",
            "market_max_month": "10월",
            "market_min_size": "1억 9112만원",
            "market_min_year": "2022년",
            "market_min_month": "2월",
            "3y_trend_start_year": "2020년",
            "3y_trend_start_market_size": "2억 3390만원",
            "3y_trend_end_year": "2022년",
            "3y_trend_end_market_size": "2억 5959만원",
            "3y_trend_percent": "11%",
            "3y_trend_hospital_count_difference": "1개",
            "profit_per_50p": "3350만원",
            "3y_trend_profit_per_area_start_year": "2020년",
            "3y_trend_profit_per_area_start_market_size": "62만원",
            "3y_trend_profit_per_area_end_year": "2022년",
            "3y_trend_profit_per_area_end_market_size": "62만원",
            "3y_trend_profit_per_area_percent": "0%",
            "market_size_short_trend": [
                {
                    "class": "2021년 6월",
                    "value": 21296
                },
                {
                    "class": "2021년 7월",
                    "value": 29006
                },
                {
                    "class": "2021년 8월",
                    "value": 34489
                },
                {
                    "class": "2021년 9월",
                    "value": 21453
                },
                {
                    "class": "2021년 10월",
                    "value": 36361
                },
                {
                    "class": "2021년 11월",
                    "value": 30982
                },
                {
                    "class": "2021년 12월",
                    "value": 31910
                },
                {
                    "class": "2022년 1월",
                    "value": 31890
                },
                {
                    "class": "2022년 2월",
                    "value": 19112
                },
                {
                    "class": "2022년 3월",
                    "value": 23405
                },
                {
                    "class": "2022년 4월",
                    "value": 24365
                },
                {
                    "class": "2022년 5월",
                    "value": 31023
                }
            ],
            "market_size_long_trend": [
                {
                    "class": "2020년",
                    "value": 23390
                },
                {
                    "class": "2021년",
                    "value": 27559
                },
                {
                    "class": "2022년",
                    "value": 25959
                }
            ],
            "hospital_count_short_trend": [
                {
                    "class": "2021년 2분기",
                    "value": 12
                },
                {
                    "class": "2021년 3분기",
                    "value": 12
                },
                {
                    "class": "2021년 4분기",
                    "value": 12
                },
                {
                    "class": "2022년 1분기",
                    "value": 12
                }
            ],
            "hospital_count_long_trend": [
                {
                    "class": "2020년",
                    "value": 11
                },
                {
                    "class": "2021년",
                    "value": 12
                },
                {
                    "class": "2022년",
                    "value": 12
                }
            ],
            "profit_per_area_short_trend": [
                {
                    "class": "2021년 6월",
                    "value": 56
                },
                {
                    "class": "2021년 7월",
                    "value": 68
                },
                {
                    "class": "2021년 8월",
                    "value": 76
                },
                {
                    "class": "2021년 9월",
                    "value": 53
                },
                {
                    "class": "2021년 10월",
                    "value": 86
                },
                {
                    "class": "2021년 11월",
                    "value": 80
                },
                {
                    "class": "2021년 12월",
                    "value": 80
                },
                {
                    "class": "2022년 1월",
                    "value": 71
                },
                {
                    "class": "2022년 2월",
                    "value": 45
                },
                {
                    "class": "2022년 3월",
                    "value": 54
                },
                {
                    "class": "2022년 4월",
                    "value": 56
                },
                {
                    "class": "2022년 5월",
                    "value": 83
                }
            ],
            "profit_per_area_long_trend": [
                {
                    "class": "2020년",
                    "value": 62
                },
                {
                    "class": "2021년",
                    "value": 68
                },
                {
                    "class": "2022년",
                    "value": 62
                }
            ]
        },
        "competitive_analysis": {
            "all_hospital_average_profit": "2565만원",
            "new_hospital_average_profit": "4740만원",
            "competition_type": "치열함",
            "competition_rate": "0.11로",
            "address_dong": "오전동",
            "department": "치과",
            "new_hospital_count": "1개",
            "all_to_new_compare": "높습니다",
            "hospital_profit_distribution_chart": [
                {
                    "class": "의원1",
                    "value": 5424
                },
                {
                    "class": "의원2",
                    "value": 4740
                },
                {
                    "class": "의원3",
                    "value": 3699
                },
                {
                    "class": "의원4",
                    "value": 3212
                },
                {
                    "class": "의원5",
                    "value": 2304
                },
                {
                    "class": "의원6",
                    "value": 1953
                },
                {
                    "class": "의원7",
                    "value": 1757
                },
                {
                    "class": "의원8",
                    "value": 1474
                },
                {
                    "class": "의원9",
                    "value": 1439
                },
                {
                    "class": "의원10",
                    "value": 1282
                }
            ],
            "competition_table": [
                {
                    "profit": "5424만원",
                    "acquisition_rate": "19%",
                    "rate_squared": 0.04
                },
                {
                    "profit": "4740만원",
                    "acquisition_rate": "17%",
                    "rate_squared": 0.03
                },
                {
                    "profit": "3699만원",
                    "acquisition_rate": "13%",
                    "rate_squared": 0.02
                },
                {
                    "profit": "3212만원",
                    "acquisition_rate": "11%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "2304만원",
                    "acquisition_rate": "8%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1953만원",
                    "acquisition_rate": "7%",
                    "rate_squared": 0
                },
                {
                    "profit": "1757만원",
                    "acquisition_rate": "6%",
                    "rate_squared": 0
                },
                {
                    "profit": "1474만원",
                    "acquisition_rate": "5%",
                    "rate_squared": 0
                },
                {
                    "profit": "1439만원",
                    "acquisition_rate": "5%",
                    "rate_squared": 0
                },
                {
                    "profit": "1282만원",
                    "acquisition_rate": "5%",
                    "rate_squared": 0
                },
                {
                    "profit": "934만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                }
            ],
            "competition_top10_table": [
                {
                    "profit": "5424만원",
                    "acquisition_rate": "19%",
                    "rate_squared": 0.04
                },
                {
                    "profit": "4740만원",
                    "acquisition_rate": "17%",
                    "rate_squared": 0.03
                },
                {
                    "profit": "3699만원",
                    "acquisition_rate": "13%",
                    "rate_squared": 0.02
                },
                {
                    "profit": "3212만원",
                    "acquisition_rate": "11%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "2304만원",
                    "acquisition_rate": "8%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1953만원",
                    "acquisition_rate": "7%",
                    "rate_squared": 0
                },
                {
                    "profit": "1757만원",
                    "acquisition_rate": "6%",
                    "rate_squared": 0
                },
                {
                    "profit": "1474만원",
                    "acquisition_rate": "5%",
                    "rate_squared": 0
                },
                {
                    "profit": "1439만원",
                    "acquisition_rate": "5%",
                    "rate_squared": 0
                },
                {
                    "profit": "1282만원",
                    "acquisition_rate": "5%",
                    "rate_squared": 0
                }
            ],
            "competition_rest_info": [
                {
                    "rest_hospital_count": 1,
                    "rate_sum_top10": 96,
                    "rate_squared_sum_top10": 0.11,
                    "rate_sum_rest": 3,
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
                    "open_date": "2021년 06월 16일",
                    "hospital_name": "웰빙명인치과의원",
                    "area": "43평",
                    "prof": "-"
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
            "closed_hospital_table": []
        },
        "user_analysis": {
            "major_customer_age_sex": "60대 이상 남성",
            "major_customer_profit": "4천~6천만원",
            "major_customer_profit_ratio": "39%",
            "average_profit_per_customer": "13만 7483원",
            "address_dong": "오전동",
            "department": "치과",
            "customer_male_ratio": "57%",
            "customer_female_ratio": "43%",
            "sex_compare": "남성",
            "male_max_count_age": "60대 이상으로",
            "male_max_count_ratio": "31%",
            "female_max_count_age": "60대 이상으로",
            "female_max_count_ratio": "31%",
            "max_average_profit_per_customer": "18만 2901원",
            "max_average_profit_per_customer_year": "2021년",
            "max_average_profit_per_customer_month": "10월",
            "min_average_profit_per_customer": "10만 1479원",
            "min_average_profit_per_customer_year": "2021년",
            "min_average_profit_per_customer_month": "9월",
            "3year_trend_early_size": "12만 8207원",
            "3year_trend_late_size": "13만 1792원",
            "3year_trend_percent": "4%",
            "3year_trend_compare": "증가",
            "sex_distribution_chart": [
                {
                    "class": "남성",
                    "value": 57
                },
                {
                    "class": "여성",
                    "value": 43
                }
            ],
            "male_age_distribution_chart": [
                {
                    "class": "20대",
                    "value": 3
                },
                {
                    "class": "30대",
                    "value": 13
                },
                {
                    "class": "40대",
                    "value": 23
                },
                {
                    "class": "50대",
                    "value": 29
                },
                {
                    "class": "60대 이상",
                    "value": 31
                }
            ],
            "female_age_distribution_chart": [
                {
                    "class": "20대",
                    "value": 7
                },
                {
                    "class": "30대",
                    "value": 14
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
                    "value": 31
                }
            ],
            "customer_profit_distribution_chart": [
                {
                    "class": "정보 없음",
                    "value": 1
                },
                {
                    "class": "2천만원 미만",
                    "value": 0
                },
                {
                    "class": "2000만원~3000만원",
                    "value": 0
                },
                {
                    "class": "3000만원~4000만원",
                    "value": 11
                },
                {
                    "class": "4000만원~6000만원",
                    "value": 39
                },
                {
                    "class": "6000만원~8000만원",
                    "value": 27
                },
                {
                    "class": "8000만원~1억원",
                    "value": 12
                },
                {
                    "class": "1억원 이상",
                    "value": 10
                }
            ],
            "average_profit_per_customer_short_chart": [
                {
                    "class": "2021년 6월",
                    "value": 127214
                },
                {
                    "class": "2021년 7월",
                    "value": 133608
                },
                {
                    "class": "2021년 8월",
                    "value": 166452
                },
                {
                    "class": "2021년 9월",
                    "value": 101479
                },
                {
                    "class": "2021년 10월",
                    "value": 182901
                },
                {
                    "class": "2021년 11월",
                    "value": 143037
                },
                {
                    "class": "2021년 12월",
                    "value": 130458
                },
                {
                    "class": "2022년 1월",
                    "value": 148670
                },
                {
                    "class": "2022년 2월",
                    "value": 113359
                },
                {
                    "class": "2022년 3월",
                    "value": 131417
                },
                {
                    "class": "2022년 4월",
                    "value": 128506
                },
                {
                    "class": "2022년 5월",
                    "value": 142698
                }
            ],
            "average_profit_per_customer_long_chart": [
                {
                    "class": "2020년",
                    "value": 128207
                },
                {
                    "class": "2021년",
                    "value": 143487
                },
                {
                    "class": "2022년",
                    "value": 132930
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

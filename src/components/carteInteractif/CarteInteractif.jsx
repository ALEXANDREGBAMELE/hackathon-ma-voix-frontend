import { useState } from "react";

export default function CarteInteractif() {
    const [hoveredCommune, setHoveredCommune] = useState(null);
    const [clickCommune, setClickCommune] = useState(null);

    // Fonction appelée lorsqu'un utilisateur survole une commune
    const handleCommuneHover = (communeName) => {
        setHoveredCommune(communeName);
    };

    // Fonction appelée lorsque le survol de la commune se termine
    const handleCommuneMouseLeave = () => {
        setHoveredCommune(null);
    };
    const handleCommuneClick = (communeName) => {
        alert(`Vous avez cliqué sur la commune : ${communeName}`);
    };
    return (
        <div
            style={{
                width: "100%",
                height: "18rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1px",
            }}
        >
            <svg
                version="1.1"
                id="Calque_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 645.3 500.9"
                style={{ enableBackground: "new 0 0 595.3 841.9" }}
                xml:space="preserve"
            >
                <g>
                    <g fill="#FFEF26">
                        <path
                            className="st0"
                            d="M9.1,148.1l20.5,5.4l21.9-5.4l10.9,5.4H72l6.8,6.3l12.3,9h15h23.2c0,0-9.6,7.2,0,8.1
    c9.6,0.9,24.6,7.2,24.6,7.2l17.8,5.4h20.5l19.1,9l12.3,4.5l13.7,10.8l30.1,11.7h11.8V211v-9l18.3-2.7l9.6-12.6v-7.2V166l6.8-9
    l12.3-9h9.6v4.5l12.3-12.6h13.7v-9.9l9.6-5.4l-6.8-9l-15-11.7H329l-15,1.8l-13.7,5.4l-21-1.8l-22.7-5.4l-15,7.2l-5.5,11.7
    l-8.2,6.3l-9.6-9.9l-9.6-9.9l-5.5-5.4h-13h-21.2h-19.1l-21.9,7.2l-6.8,6.3l-12.3,0.9H78.9l-8.2-6.3l-24.6,4.5L24.2,121l-6.8,1.8
    l-8.2,4.5v9L9.1,148.1L9.1,148.1z"
                        />

                        <text
                            transform="matrix(1.4742 0 0 1 149.7066 164.3756)"
                            className="st2 st3"
                            fill="#000000"
                        >
                            ABOBO
                        </text>
                    </g>

                    <g fill="#F9B233">
                        <path
                            class="st4"
                            d="M380.9,128.8c7.4-2,11.7-3.1,16.2-1.2c9.4,4,7.2,15.2,17.1,23.4c9.8,8.1,17.1,1.4,25.9,8.1
			c12.7,9.7,1.9,27.4,13.9,47.8c8.5,14.6,16,9,28.1,24.9c18.3,23.9,18.4,58.8,18.4,58.8l0,0c0,0-6.6,5.9-8.6,11.4
			c-2.8,7.6,4.3,11.1,4,21.8c-0.2,7.8-4.3,17.1-10,18.2c-4.1,0.8-6-3.3-15.7-10.6c-14.8-11.2-21-9.7-25.4-17.9
			c-3.8-7-1.5-12.1-5.4-14c-4.5-2.1-11.9,2.2-15.5,7.1c-3.6,4.8-3.6,10.4-3.7,13.6c0,2,0,5.6,1.6,9.7c1,2.6,2.2,4,1.8,4.3
			c-1.1,0.9-10.2-13.6-20.6-12.8c-3.4,0.3-8.9,2.4-10.1,0.5c0-0.1-0.1-0.2-0.2-0.4c-1-3.5,6.6-9,5.8-11.1
			c-1.1-2.8-18.3-2.5-21.4,4.9c-2.8,6.5,6.7,15.9,5.3,16.9c-1.3,1-7.4-7.7-18.7-10.7c-5.6-1.5-11.5-1.3-12.1,0.4
			c-0.6,1.8,5.3,3.6,8.6,10.2c1,2.1,3.4,6.8,1.6,9.9c-3.5,5.8-17.3-1.7-26.5,5.6c-5.5,4.3-3.1,8.9-8.7,12.4
			c-6.9,4.3-18.1,1.6-25.1-3.1c-8.6-5.8-7.2-12.1-14.5-14.4c-8-2.6-14.4,3.6-18.2,0.1c-2.9-2.7-1.7-8.7-0.5-11.8
			c3.3-8.4,10.5-7.2,13.8-14.1c4.8-9.9-6.3-20.3-0.8-26.6c3.1-3.5,7.4-1.3,10.4-5.4c3.3-4.6-0.7-9.2,2.7-13.6
			c3.1-4,7.5-1.7,10.4-5.4c3.7-4.8-2.8-10.5-0.1-18.7c2.4-7.4,9-6.6,10.7-13.3c2.1-8.4-7.4-14.2-4.1-19.8c2.5-4.3,11.4-6.3,11.4-6.3
			l0,0c0,0,4.6-6.1,6.7-13.4c2-7,1.3-13.4,0.9-15.8c-0.1-0.5-0.1-0.6-0.1-0.9c-1.3-8.8,8.5-19.3,11.1-22.1
			C350.4,145.9,361.6,134.1,380.9,128.8z"
                        />

                        <text
                            transform="matrix(0.8979 4.225719e-02 -4.700889e-02 0.9989 326.3924 262.516)"
                            fill="#000000"
                            class="st2 st5"
                            fontSize={25}
                        >
                            COCODY
                        </text>
                    </g>
                    <g
                        style={{
                            fill: "url(#SVGID_00000121961913261015768980000010214819372111091890_)",
                            stroke: "#000203",
                        }}
                    >
                        <path
                            class="st6"
                            d="M424.9,116.1l14.3-7.3V85.8L459,50h10.7L487,29.8L503.5,50l14,9.2h5.8h4.1l5.8,1.8v8.3l6.6,3.7v14.7L544,95
			v5.5v23.9v11.9l6.6,15.6c0,0,8.3-0.9,10.7,0c2.5,0.9,4.1,8.3,4.9,11c0.8,2.7,4.1,11,4.1,11l5.8,10.1l4.9,8.3v18.4l-18.1,12.8
			l-16.5-17.9l-6.6-9.6c0,0-14-1.8-16.5-0.9c-2.5,0.9-0.8,10.6-0.8,10.6v8.7l-7.4,4.6l-5.8-8.3c0,0-2-2.7-6.3,1.8
			c-4.4,4.6-6-12.8-6-12.8h-14.9c0,0,4.1,8.3,5.8,11.9s1.7,3.7,1.7,3.7l-7.4,8.3l-8.3-17.9h-5.8l-4.1,9.6l-16.5-18.4l-3.3-12.8
			l1.7-11.9l6.6-18.4l-21.5-3.7l-6.1,2.7l-4.6-1.8v-9.2v-11.9L424.9,116.1z"
                        />

                        <text
                            transform="matrix(0.8615 0 0 1 448.4073 141.0665)"
                            class="st2 st7"
                        >
                            BINGERVILLE
                        </text>
                    </g>
                    <g
                        style={{
                            fill: "url(#SVGID_00000121961913261015768980000010214819372111091890_)",
                            stroke: "#020203",
                        }}
                    >
                        <polygon
                            class="st8"
                            points="220.6,213.3 278.5,243.3 272,255.3 278.5,263.3 265,276.3 254.4,293.3 249.6,300.3 249.6,315.8 
			242.8,326.3 236.9,331.3 239.3,336.3 232.3,345.3 239.3,356.3 228.8,356.3 208.9,356.3 208.9,338.3 215.9,329.3 208.9,325.3 
			208.9,315.8 203.1,301.3 203.1,281.3 203.1,268.3 214.7,258.3 211.2,246.3 		"
                        />

                        <text
                            transform="matrix(1 0 0 1 222.8324 236.7114)"
                            class="st2 st9"
                        >
                            A
                        </text>
                        <text
                            transform="matrix(1 0 0 1 222.8324 255.9113)"
                            class="st2 st9"
                        >
                            D
                        </text>
                        <text
                            transform="matrix(1 0 0 1 222.8324 275.1114)"
                            class="st2 st9"
                        >
                            J
                        </text>
                        <text
                            transform="matrix(1 0 0 1 222.8324 294.3113)"
                            class="st2 st9"
                        >
                            A
                        </text>
                        <text
                            transform="matrix(1 0 0 1 222.8324 313.5114)"
                            class="st2 st9"
                        >
                            M
                        </text>
                        <text
                            transform="matrix(1 0 0 1 222.8324 332.7114)"
                            class="st2 st9"
                        >
                            E
                        </text>
                    </g>
                    <g onClick={() => handleCommuneClick("YOPOUGON")}>
                        <path
                            style={{
                                fill: "#CA9E67",
                                
                            }}
                            onClick={() => handleCommuneHover("YOPOUGON")}
                            class="st10"
                            d="M54.4,267.2c5.4,0.4,4.7,3.4,15.5,7.2c8.3,2.9,18.3,4.5,18.3,4.5l0,0c0,0,5.8,4.2,11.9,5.4
			c6.4,1.2,8.2-1.9,10.9,0c5.3,3.6,2.7,18.1,2.7,18.1l0,0c0,0,4.7,4.5,8.2,7.2c5.1,3.9,9.3,7.2,14.6,7.2c6.6,0,8.1-5.2,13.7-4.5
			c5.2,0.6,5.3,5.2,10.9,8.1c10.1,5.3,18.8-4.8,27.4,0c5.5,3,7.1,9.9,9.1,18.1c2.6,10.8-0.4,13.3,2.7,22.6c2.7,8,7.4,13.4,9.1,15.4
			c6.4,7.3,9.1,5.8,15.5,13.6c4.3,5.2,4.9,8,9.1,10c3.6,1.6,8.3,1.8,10.8,1.6c2-0.2,3.8-0.7,3.8-0.7c2-0.6,2.7-1.1,2.8-1
			c0.4,0.5-6.2,10.3-16.4,11.8c-6.1,0.9-11.2-1.6-15.5-3.6c-5.5-2.6-11.9-7.2-11.9-7.2l0,0c0,0-9.4-0.6-12.8-0.9
			c-2.5-0.2-14.5-1.4-24.6-7.2c-12.1-7-15.6-17.2-17.4-16.3c-1.8,1,0.8,12,7.3,20.8c2.9,3.8,6.9,7.8,8.2,9c6.7,6.6,10.6,8.5,10,10.9
			c-0.6,2.5-5.8,3.5-9.1,3.6c-6.4,0.2-10.7-2.5-21.9-9c-8.9-5.1-13.4-7.7-14.6-8.1c-2.1-0.7-16.3-5.5-28.3,0.9
			c-6.7,3.6-7.6,7.9-15.5,10c-1.1,0.3-8.7,2.2-10.9-0.9c-0.5-0.7-0.6-1.4-0.7-1.9c-0.7-7.1,7-15.1,6.1-22.5c-0.7-6-6.9-9.8-10-11.8
			c-1.4-0.9-11.2-6.9-17.3-2.7c-4.4,3-4.6,9.5-4.6,10c-0.1,11.5,14,15.1,14.6,28c0.1,1.6,0.3,6.4-2.7,9c-2.9,2.5-6.5,1.2-14.6,0.9
			c-13.6-0.5-15.7,2.8-20.1,0c-5.2-3.4-7.9-11.7-5.5-17.2c2.4-5.4,8.8-5.6,9.1-10c0.2-2.8-2.3-5.1-5.5-8.1c-5.1-4.8-7.3-3.8-10-7.2
			c-3.2-4-1.5-7-3.7-14.5c-1.7-6-4-8.1-6.4-12.7c-5.1-9.7-8.9-26.9-1.8-35.3c6-7.1,14.9-1.7,21-9c5.9-7.1-0.7-14.1,4.6-25.3
			C35,274.2,45.3,266.5,54.4,267.2z"
                        />

                        <text
                            transform="matrix(1 0 0 1 34.1703 353.9529)"
                            class="st2 st11"
                        >
                            YOPOUGON
                        </text>
                    </g>
                    <g
                        style={{
                            fill: "#F39200",
                            stroke: "#020203",
                        }}
                    >
                        <path
                            class="st4"
                            d="M49.8,458.4c11.4-10.1,29.1-16.8,34.2-10c3,4-0.1,10,2.6,12c3.4,2.5,9-6.3,20.6-12c2.7-1.3,13.7-6.4,26.5-4
			c8.4,1.5,13.9,5.5,21.4,11c12.6,9.2,12.4,13,26.5,26c13.7,12.6,19.4,14.2,29.1,27c4.1,5.5,10.6,14,8.6,18c-1.7,3.3-8.1,1.1-27.4-2
			c-15-2.4-22.6-3.6-28.2-3c-13.6,1.5-13.3,7.2-29.1,11c-12.8,3.1-12.8-0.7-36,2c-13.4,1.5-13.8,2.8-23.1,3c-12,0.2-15.1-1.9-24,0
			c-11.2,2.4-14.3,7.4-17.1,5c-4.6-3.9,4.8-17.2,4.3-42c-0.2-13.1-3.1-19.6,0.9-29C42.1,465.2,46,461.8,49.8,458.4z"
                        />

                        <text
                            transform="matrix(1 0 0 1 66.3875 500.0209)"
                            class="st2 st11"
                        >
                            SONGON
                        </text>
                    </g>
                    <g>
                        <path
                            style={{
                                fill: "#CA9E67",
                                stroke: "#020203",
                            }}
                            class="st12"
                            d="M234.6,362.5c9.1-9.7,30.4-6.6,43.2,0c10.3,5.3,10,10.2,21.6,14.5c2.9,1,17.4,6.4,24.5,3.7
			c0.2-0.1,0.6-0.2,1.1-0.1c3.7,1.3,4.1,22.3-7.9,30.8c-9.4,6.6-22.9,3-27.5,1.8c-15.9-4.2-15.1-12.8-33.4-19.9
			c-13-5.1-19.3-3.1-23.6-9.1C228.3,378.2,229.3,368.2,234.6,362.5z"
                        />

                        <text
                            transform="matrix(.8 0 0 1 248.2257 388.8276)"
                            class="st2 st13"
                        >
                            PLATEAU
                        </text>
                    </g>
                    <g
                        style={{
                            fill: "#CA9E67",
                            stroke: "#020203",
                        }}
                    >
                        <path
                            class="st14"
                            d="M336.8,407.7c10.1,2.4,14.6,13.1,15,14c0.8,1.9,4.4,10.7,0,16c-5.4,6.5-15.9-0.5-28.9,4
			c-19,6.6-21.1,30-31.1,29c-2.8-0.3-5.8-4.5-11.8-13c-7.9-11.1-11.8-16.8-10.7-23c1.4-8.1,9.1-12.7,9.7-13c6.8-3.9,11.6-1.2,21.4-2
			C320.2,418,324.5,404.8,336.8,407.7z"
                        />

                        <text
                            transform="matrix(.8 0 0 1 273.4018 439.6549)"
                            fill="#000000"
                            class="st2 st15"
                        >
                            TREICHVILLE
                        </text>
                    </g>
                    <g>
                        <path
                            style={{
                                fill: "url(#SVGID_00000121961913261015768980000010214819372111091890_)",
                                stroke: "#020203",
                                strokeMiterlimit: 10,
                            }}
                            class="st4"
                            d="M363.9,414.5c-4.9-3.2-1-10.3,4-15.1c7.2-6.8,22.3-13.6,22.3-13.6l0,0c1.7,9.9,5.2,10.5,5.2,10.5
			c1.7,0.3,3.9,0.2,20-4c19.3-5,24.2-7,26.5-6.1c3.1,1.3-4.8,5.8-5,12.1c0,0-0.1,3.6,9.1,11.7l0,0c0,0-0.5,6.3-5.9,9.2
			c-5,2.7-9.7,0.1-22.1,3c-7.3,1.7-6.8,2.9-16.1,5.2c-8.7,2.1-18.4,3.5-18.4,3.5l0,0c0,0,9.7-10.2,6.1-14.1
			C385.7,412.7,370.1,418.6,363.9,414.5z"
                        />

                        <text
                            transform="matrix(1 0 0 1 368.28 410.4177)"
                            class="st2 st16"
                        >
                            MARCORY
                        </text>
                    </g>
                    <g>
                        <linearGradient
                            id="SVGID_00000121961913261015768980000010214819372111091890_"
                            gradientUnits="userSpaceOnUse"
                            x1="444.3127"
                            y1="456.0344"
                            x2="528.1008"
                            y2="456.0344"
                            gradientTransform="matrix(1 0 0 -1 0 841.8898)"
                        >
                            <stop offset="0" style={{ stopColor: "#FFEF26" }} />
                            <stop
                                offset="5.950000e-02"
                                style={{ stopColor: "#FFE000" }}
                            />
                            <stop
                                offset="0.1303"
                                style={{ stopColor: "#FFD300" }}
                            />
                            <stop
                                offset="0.2032"
                                style={{ stopColor: "#FECB00" }}
                            />
                            <stop
                                offset="0.2809"
                                style={{ stopColor: "#FDC800" }}
                            />
                            <stop
                                offset="0.6685"
                                style={{ stopColor: "#F18F34" }}
                            />
                            <stop
                                offset="0.8876"
                                style={{ stopColor: "#E95F32" }}
                            />
                            <stop offset="1" style={{ stopColor: "#E3312D" }} />
                        </linearGradient>
                        <path
                            style={{
                                fill: "url(#SVGID_00000121961913261015768980000010214819372111091890_)",
                                stroke: "#020203",
                                strokeMiterlimit: 10,
                            }}
                            d="M446.2,380.5c-3.6,2.9-1.3,5,0,22c0.1,1.5,0.3,2.9,0.4,4.4c0.8,9.8,0.7,10.2,1.4,10.6c5.9,3.2,39.3-3.9,56.2-19 c9-8,16.3-21,16.3-21l0,0c9.4-8.9,7.3-10,7.3-10c-2.7-1.4-18.2,8.2-25.4,6c-3.6-1.1-1.5-4-5.4-10c-2.2-3.4-6.1-9.3-12.7-10 c-9.9-1-23.6,10-23.6,10l0,0c0,0,5.9,6.1,3.6,10C461.9,377.8,451.9,375.9,446.2,380.5z"
                        />

                        <text
                            transform="matrix(.9 0 0 1.3 445.2049 393.3769)"
                            className="st2 st16"
                        >
                            KOUMASSI
                        </text>
                    </g>
                    <g>
                        <linearGradient
                            id="SVGID_00000001636161667942020010000016282628438238053295_"
                            gradientUnits="userSpaceOnUse"
                            x1="254.5459"
                            y1="348.5016"
                            x2="594.0795"
                            y2="348.5016"
                            gradientTransform="matrix(1 0 0 -1 0 841.8898)"
                        >
                            <stop offset="0" style={{ stopColor: "#FFEF26" }} />
                            <stop
                                offset="5.950000e-02"
                                style={{ stopColor: "#FFE000" }}
                            />
                            <stop
                                offset="0.1303"
                                style={{ stopColor: "#FFD300" }}
                            />
                            <stop
                                offset="0.2032"
                                style={{ stopColor: "#FECB00" }}
                            />
                            <stop
                                offset="0.2809"
                                style={{ stopColor: "#FDC800" }}
                            />
                            <stop
                                offset="0.6685"
                                style={{ stopColor: "#F18F34" }}
                            />
                            <stop
                                offset="0.8876"
                                style={{ stopColor: "#E95F32" }}
                            />
                            <stop offset="1" style={{ stopColor: "#E3312D" }} />
                        </linearGradient>
                        <path
                            style={{
                                fill: "url(#SVGID_00000001636161667942020010000016282628438238053295_)",
                                stroke: "#020203",
                                strokeMiterlimit: 10,
                            }}
                            d="M255.9,495.8c-4,7.8,1.5,19.5,7.2,25.8c5.9,6.4,12.8,8.2,18.3,9.6c5.2,1.3,11.4,2.9,14.3-0.3c3.7-4.1-0.9-12.6,1.6-14 c2.4-1.4,6.6,7,15.4,9.7c5.8,1.7,8.1-0.7,16.1-1.4c11.5-1,12.6,3.6,27.7,5.4c5.3,0.6,5.1,0.1,28.5-0.6c9.4-0.3,7.3-0.1,20.9-0.5 c33-0.8,36.7-1.5,42.9,2c4.6,2.7,7,5.7,14.5,8.7c8.4,3.3,13.7,2.8,15.3,2.7c3.1-0.4,8.6-1,12.2-5.3c3.2-3.8,1.4-6.2,4.5-10.1 c1.5-1.9,5.8-3.4,14.1-6.3c7.4-2.6,11.1-3.8,13.2-3.3c3.2,0.8,3.6,2.5,9.7,7.8c3.9,3.4,8.2,7.1,13.5,9.7c4,1.9,7.7,2.5,15.3,3.7 c11.2,1.7,16.9,2.6,19-0.4c2.2-3-1.3-6.4,0.7-11c2.9-6.5,12.7-5.6,13.1-9.3c0.3-2.3-3.4-4.5-10.7-8.8c-8.8-5.1-13.2-7.7-17.3-7.6 c-8,0.2-10.4,6.1-16.1,4.4c-4.3-1.4-4.2-5.3-8.8-8.8c-7-5.4-13.2-0.8-22.9-2.5c-12.6-2.2-11.3-11.6-28-20.4 c-9.4-4.9-8.5-1.3-30.6-9.3c-11.9-4.3-13.1-5.7-21.1-7.5c-9.5-2.2-12.6-1.3-19.1-4.6c-7.8-3.9-7.3-7.2-13.5-8.7 c-8.3-2-18.2,1.5-18.9,5.1c0,0.1,0,0.2,0,0.3c-0.1,3,6.8,4.9,10.6,6.8c7.4,3.7,5.1,8.5,18.6,25.6c0,0,3,3.6,8.8,10.8l0,0 l0,0 c-8.3,5-8.6,5.2-9.4,5.2c-6.3,0.5-7.4-9.3-17.4-13.6c-7.3-3.1-11.2,0.1-14.4-3.7c-2.7-3.3-0.6-6.9-1.3-17 c-0.4-5.8-2-17.5-5.2-17.9c-3.4-0.5-3.6,12.8-13.8,19.3c-4.7,3-6.6,1.4-15.1,5.3c-6.8,3.2-7.1,4.9-13.1,8.3 c-5.1,2.9-18,10.1-28.4,5.6c-7.5-3.2-6.3-9.4-12.6-10.7c-6.3-1.4-9,4.5-25.4,13.6C259.8,492.6,257.7,492.4,255.9,495.8z"
                        />

                        <text
                            transform="matrix(1 0 0 1 356.4664 513.8042)"
                            className="st2 st19"
                        >
                            PORT-BOUET
                        </text>
                    </g>
                    <g>
                        <g fill="#95C11F">
                            <path
                                class="st12"
                                d="M93.8,169.2h5.4h6.5l7.5,9.5h5.4h14h14l7.5,12.1H167l10.8,6.9H194l10.8,11.3l6.5,6.1v13l-9.7,9.5l2.1,15.6
				l-4.3,6.9h-7.5l1.1,9.5l-2.1,17.4c0,0-1.1,13,3.2,12.6s1.1,10.8,1.1,10.8l9.7,5.2l-8.6,12.1h-12.9l-10.8-5.2l-4.3-18.2l-5.4-8.7
				l-10.2-5.2h-5.9l-7.5-1.7h-9.7l-12.9-5.2l-7.5,2.6l-20.5-2.6l-12.9-6.9l-5.4,0.9l8.6-9.5l-8.6-7.8v-5.2l-5.4-1.7l-11.8,4.3
				l-7.5-0.9l-7.5-8.2H16.3l-8.6-4.8L1.2,236l6.5-9.5l-6.5-11.3l6.5-10.4l10.8-1.7l18.3,6.9l10.8,1.7l11.8-15.6l6.5-5.2l7.5-0.9
				L93.8,169.2z"
                            />
                        </g>

                        <text
                            transform="matrix(1 0 0 1 69.2422 240.3997)"
                            class="st2 st11"
                        >
                            ATTECOUBE
                        </text>
                    </g>
                </g>
            </svg>
        </div>
    );
}

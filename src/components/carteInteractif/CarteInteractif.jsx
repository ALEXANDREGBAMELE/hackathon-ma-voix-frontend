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
            }}
        >
            <svg
                version="1.1"
                id="Calque_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1137.37 841.89"
                style={{ enableBackground: "new 0 0 1137.37 841.89" }}
                xmlSpace="preserve"
            >
                <polyline
                    className="st0"
                    points="77.78,363.88 162.63,297.21 281.82,278.02 327.27,358.83 264.65,394.18 159.6,377.01 107.07,417.41 
	"
                    fill="#D59612"
                    onMouseEnter={() => handleCommuneHover("Commune 1")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("Abobo")}
                />
                <polyline
                    className="st1"
                    points="293.94,267.92 454.55,194.18 506.06,296.2 407.07,430.55 337.37,358.83 284.85,278.02 "
                    onMouseEnter={() => handleCommuneHover("Bingergville")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("Bingergville")}
                    fill="#E15A16"
                />
                <polyline
                    className="st2"
                    points="127.78,442.67 140.91,502.26 224.75,498.22 230.81,596.2 475.25,596.2 471.21,489.13 319.7,383.07 
	235.86,408.32 163.13,388.12 115.66,418.92 "
                    fill="#E42A16"
                    onMouseEnter={() => handleCommuneHover("Commune 3")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("Yopougon")}
                />
                <polygon
                    className="st1"
                    points="527.27,319.43 702.02,223.47 577.78,178.02 468.69,190.14 520.2,308.32 "
                    onMouseEnter={() => handleCommuneHover("Commune 4")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("Treichville")}
                />
                <polyline
                    className="st1"
                    points="494.95,598.22 707.07,598.22 692.93,497.72 484.85,561.86 478.79,569.94 478.79,598.22 "
                    onMouseEnter={() => handleCommuneHover("Commune 5")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("Plateau")}
                    fill="#E42A16"
                />
                <polyline
                    className="st3"
                    points="495.96,318.42 409.09,429.54 458.59,468.93 587.88,416.4 658.59,268.93 538.38,318.42 533.84,333.58 
	527.27,324.48 "
                    onMouseEnter={() => handleCommuneHover("Commune 6")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("Adjame")}
                    fill="#045B1F"
                />
                <path
                    className="st1"
                    d="M579.8,376"
                    onMouseEnter={() => handleCommuneHover("Commune 7")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("Commune 7")}
                    
                />
                <polyline
                    className="st4"
                    points="771.72,596.2 776.77,596.2 785.86,596.2 1020.2,596.2 1061.62,541.66 1072.73,529.54 1018.18,481.05 
	1017.17,400.24 953.54,498.22 835.35,498.22 707.07,514.38 721.21,584.08 728.28,598.22 "
                    onMouseEnter={() => handleCommuneHover("Commune 8")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("Attécoubé")}
                    fill="#D59612"
                />
                <polyline
                    className="st5"
                    points="614.9,445.19 868.47,272.93 903.25,336.71 643.55,501.25 "
                    onMouseEnter={() => handleCommuneHover("PortBouet")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("Koumassi")}
                    fill="#D59612"
                />
                <polyline
                    className="st4"
                    points="485.86,468.93 604.04,420.94 626.26,499.23 506.06,543.68 478.79,489.64 "
                    onMouseEnter={() => handleCommuneHover("Commune 10")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("Marcory")}
                    fill="#D59612"
                />
                <polyline
                    className="st6"
                    points="692.93,258.83 877.78,244.65 890.91,244.65 885.86,252.77 649.49,414.38 600,414.38 592.93,414.38 
	661.62,266.91 "
                    onMouseEnter={() => handleCommuneHover("Commune 11")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("PortBouet")}
                    fill="#D59612"
                />
                <path className="st4" d="M822.22,329.51" />
                <polyline
                    className="st7"
                    points="681.82,492.16 668.69,500.24 911.11,341.15 1010.1,378.52 951.52,484.83 683.84,500.24 677.78,500.24 
	"
                    onMouseEnter={() => handleCommuneHover("Commune 12")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("Cocody")}
                    fill="#E42A16"
                />
                <polyline
                    className="st7"
                    points="600.76,171.96 1024.24,197.21 1038.38,366.91 905.05,332.54 900,262.87 914.14,232.57 692.93,240.65 
	698.99,217.41 595.96,181.05 571.21,176 "
                    onMouseEnter={() => handleCommuneHover("Commune 13")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("Anyama")}
                    fill="#E42A16"
                />
                <path
                    className="st8"
                    d="M1072.73,516.4l50.51-149.49c0,0-46.46-177.78-69.7-172.73c-23.23,5.05-23.23,5.05-23.23,5.05l13.13,161.62
	l-5.05,22.22l-15.15-7.07v97.98L1072.73,516.4z"
                    onMouseEnter={() => handleCommuneHover("Commune 1")}
                    onMouseLeave={handleCommuneMouseLeave}
                    onClick={() => handleCommuneClick("ABOBO")}
                />

                <text
                    transform="matrix(1 0 0 1 285.8448 492.1094)"
                    className="st10 st11 st12"
                >
                    YOPOUNGON
                </text>
                <text
                    transform="matrix(1 0 0 1 587.3287 574.2262)"
                    className="st10 st11 st12"
                >
                    PLATEAU
                </text>
                <text
                    transform="matrix(1 0 0 1 507.6101 409.7515)"
                    className="st10 st11 st12"
                >
                    ADJAME
                </text>
                <text
                    transform="matrix(1 0 0 1 663.0638 325.2225)"
                    className="st10 st11 st12"
                >
                    PORT BOUET
                </text>
                <text
                    transform="matrix(1 0 0 1 833.3317 453.092)"
                    className="st10 st11 st12"
                >
                    COCODY
                </text>
                <text
                    transform="matrix(1 0 0 1 340.8956 301.1136)"
                    className="st10 st11 st12"
                >
                    BINGERVILLE
                </text>
                <text
                    transform="matrix(1 0 0 1 513.7048 248.7275)"
                    className="st10 st11 st12"
                >
                    TREICHVILLE
                </text>
                <text
                    transform="matrix(1 0 0 1 180.426 347.7169)"
                    className="st10 st11 st12"
                >
                    ABOBO
                </text>
                <text
                    transform="matrix(1 0 0 1 520.9839 486.6062)"
                    className="st10 st11 st12"
                >
                    MARCORY
                </text>
                <text
                    transform="matrix(1 0 0 1 828.8856 208.4971)"
                    className="st10 st11 st12"
                >
                    ANYAMA
                </text>
                <text
                    transform="matrix(1 0 0 1 840.2549 553.0966)"
                    className="st10 st11 st12"
                >
                    ATTECOUBE
                </text>
                <text
                    transform="matrix(1.1564 0 0 1 733.8013 387.6113)"
                    className="st10 st11 st13"
                >
                    KOUMASSI
                </text>
                <text
                    transform="matrix(1 0 0 1 1044.9637 400.2423)"
                    className="st10 st11 st12"
                >
                    SONGON
                </text>
            </svg>
        </div>
    );
}

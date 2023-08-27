export default function ProgrameCandidat() {
  const data = Array(5).fill(0);
  return <div
    style={{
      display: "flex",
      
      minHeight: "calc(100vh - 4rem)",
      fontSize: "1rem",
      marginLeft: "25rem",
      width: "calc(100vw - 55rem)",
      flexWrap: "wrap",
      gap: "1rem",
      paddingBottom: "7rem",
      
    
    }}
  >
    {data.map((item, index) => {
      return (
        <div
          key={index}
              style={{
                  maxWidth: "300px",
                  border: "1px solid #d9d9d9",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem",
                  borderRadius: "5px",
                  background: "#fff",
                  boxShadow: "0 0 10px rgba(0,0,0,.1)",
                  height: "fit-content",
              }}
              className="program"
          >
              <h4>Securité</h4>
              <span>
                  Concourir a la prevention de l'insecurité et a la delinquance
                  dans la commune par :
                  <>
                      <li>L'optimisation des interventions de police</li>
                      <li>
                          La restruction et l'equipement des commissariat de la
                          commune
                      </li>
                      <li>
                          Le renforcement des moyens logistiques de la police
                      </li>
                  </>
              </span>
          </div>
      );
    })}
  </div>;
}

export const Alert = ({children, type="success"}) => {
  return <div style={
            {backgroundColor: type ===  "success" ? "#10b891" : "#ef4444", color: "black", 
            padding: "16px", borderRadius: "9px", marginBottom: "16px"}}>
            {children}
          </div>
}

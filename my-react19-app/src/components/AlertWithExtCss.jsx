import "../Alert.css" 

export const AlertWithExtCss = ({children, type="success"}) => {
  return <div className={`alert ${type}`}>{children}</div>
}

export default function Price({oldprice,newprice}){
    let styles = {
        
      backgroundColor: "yellow",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
    };
    let oldstyle={
        textDecorationLine :"line-through",
    };
    let newstyle={
        fontSize:"18px",
    }
    return (
      <div style={styles}>
        <span style={oldstyle}>{oldprice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newstyle}>{newprice}</span>
      </div>
    );
}
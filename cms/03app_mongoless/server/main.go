package main
import(
	//"fmt"
	"net/http"
	"github.com/gin-gonic/gin"
)
type Coffee struct {
	Id string
	Category string
	Type string
	SugerLevel string
	Quantity int
	Price float32
}

func readAllOrders(c*gin.Context) {
	orders:=[]Coffee{
		{Id:"100",Category:"Medium",Type:"Instant",SugerLevel:"Medium",Quantity:2,Price:100.0},
		{Id:"101",Category:"Large",Type:"Filter",SugerLevel:"Less",Quantity:1,Price:150.0},
		{Id:"102",Category:"Small",Type:"Instant",SugerLevel:"No",Quantity:3,Price:120.0},
}

	c.JSON(http.StatusOK,orders)
}
func readOrderById(c*gin.Context) {
	id := c.Param("id")	
	order:=Coffee{Id:id,Category:"Medium",Type:"Instant",SugerLevel:"Medium",Quantity:2,Price:100.0}
	c.JSON(http.StatusOK,order)
}

func createdOrder(c*gin.Context) {
	var jbodyFlight Coffee
	err := c.BindJSON(&jbodyFlight)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error":"Server Error"+ err.Error()})
		return
	}
	createdCoffee:=Coffee{Id:"100",Category:"Medium",Type:"Instant",SugerLevel:"Medium",Quantity:2,Price:100.0}
	c.JSON(http.StatusCreated,gin.H{"message":"order created successfully","flight":createdCoffee})
}
func updateCoffee(c*gin.Context) {
	var jbodyFlight Coffee
	err := c.BindJSON(&jbodyFlight)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error":"Server Error"+ err.Error()})
		return
	}
	updatedCoffee:=Coffee{Id:"100",Category:"Medium",Type:"Instant",SugerLevel:"Medium",Quantity:2,Price:100.0}
	c.JSON(http.StatusOK,gin.H{"message":"order updated successfully","flight":updatedCoffee})
}
func deleteCoffee(c*gin.Context) {
	id := c.Param("id")	
	c.JSON(http.StatusOK,gin.H{"message":"order deleted successfully with id:"+id})
}
func main() {
	//router defining
	r := gin.Default()
	r.GET("/coffee",readAllOrders)
	r.GET("/coffee/:id",readOrderById)
	r.POST("/coffee",createdOrder)
	r.PUT("/coffee/:id",updateCoffee)
	r.DELETE("/coffee/:id",deleteCoffee)
	//server (default port 8080) r.Run(":8080")
	r.Run(":8080")
	
}
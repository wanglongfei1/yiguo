import {SYNC_UPDATE} from "./const"
export default {
    initCars(ctx){
        //获取购物车
        let cars = getCar()
        ctx.commit(SYNC_UPDATE,cars)
    },
    addGoodInCars(ctx,detail){
        setTimeout(() => {
            //获取后台返回来的购物车
            let cars = getCar()
            let isHas = cars.some(item=>{
                if(item.CommodityId === detail.CommodityId){//说明数组里面的商品与外面传来的商品是同一个
                    item.num++
                    return true
                }
            })
            if(!isHas){ //没有此商品
                detail.num = 1
                cars.push(detail)
            }
        
            localStorage.cars = JSON.stringify(cars)
            ctx.commit(SYNC_UPDATE,cars)
        }, 1000);
    },
    reduceGoodInCars(ctx,detail){
        let cars = getCar()
        cars = cars.filter(item=>{
            if(item.CommodityId === detail.CommodityId){
                item.num--
                if(item.num<=0) return false; 
            }
            return true
        })
        localStorage.cars = JSON.stringify(cars)
        ctx.commit(SYNC_UPDATE,cars)
    },
    remove(ctx,detail){
        let cars = getCar()
        cars = cars.filter(item=>{
            if(item.CommodityId === detail.CommodityId){
                 return false; 
            }
            return true
        })
        localStorage.cars = JSON.stringify(cars)
        ctx.commit(SYNC_UPDATE,cars)
    }
}


//使用本地存储作为后台进行模拟  
function getCar(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}
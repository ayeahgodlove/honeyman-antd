import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { IRootState } from "Redux/store";
import { IOrder } from "Models/IOrder";
import {
  addOrderSuccess,
  editOrderSuccess,
  fetchOrdersAsync,
  setActiveOrder,
} from "../Redux/order.slice";
import { OrderService } from "Services/OrderService";
const useOrder = () => {
  const orders = useSelector<IRootState, IOrder[]>((state) => state.order.orders);
  const isLoading = useSelector<IRootState, boolean>(
    (state) => state.order.isLoading
  );
  const initialFetch = useSelector<IRootState, boolean>(
    (state) => state.order.initialFetch
  );
  const order = useSelector<IRootState, IOrder>((state) => state.order.order);

  const dispatch = useDispatch();

  const loadOrders = useCallback(() => {
    if (initialFetch) {
      dispatch(fetchOrdersAsync() as any);
    }
  }, [dispatch, initialFetch]);

  const addOrder = async (order: IOrder) => {
    return await OrderService.create(order)
      .then((orderResponse) => {
        dispatch(addOrderSuccess(orderResponse.data));
        return true;
      })
      .catch((error) => {
        console.log(error)
        return false;
      });
  };

  const setOrder = (order: IOrder) => {
    dispatch(setActiveOrder(order));
  };

  const editOrder = async (order: IOrder) => {
    return await OrderService.update(order)
      .then((orderResponse) => {
        dispatch(editOrderSuccess(orderResponse.data));
        setOrder(orderResponse.data);
        return true;
      })
      .catch((error) => {
        console.log(error)
        return false;
      });
  };

  useEffect(() => {
    loadOrders();
  }, [order, orders, isLoading, initialFetch, loadOrders]);

  return {
    order,
    orders,
    isLoading,
    initialFetch,
    addOrder,
    editOrder,
    setOrder,
  };
};

export { useOrder };

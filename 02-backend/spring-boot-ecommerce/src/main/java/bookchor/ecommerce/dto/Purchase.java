package bookchor.ecommerce.dto;

import bookchor.ecommerce.entity.Address;
import bookchor.ecommerce.entity.Customer;
import bookchor.ecommerce.entity.Order;
import bookchor.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;


}

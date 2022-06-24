package bookchor.ecommerce.service;

import bookchor.ecommerce.dto.Purchase;
import bookchor.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);


}

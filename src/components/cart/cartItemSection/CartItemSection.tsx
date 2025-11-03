/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useCallback } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType, formatCurrency } from "../../../types/cart";
import Button from "@/components/ui/button/Button";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onChangeBy: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

export const CartItemSection = memo<CartItemProps>(function CartItemSection({
  item,
  onUpdateQuantity,
  onChangeBy,
  onRemove,
}) {
  const handleQuantityChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const quantity = Number(e.target.value);
      if (!isNaN(quantity)) {
        onUpdateQuantity(item.id, quantity);
      }
    },
    [item.id, onUpdateQuantity]
  );

  const handleDecrement = useCallback(() => {
    onChangeBy(item.id, -1);
  }, [item.id, onChangeBy]);

  const handleIncrement = useCallback(() => {
    onChangeBy(item.id, 1);
  }, [item.id, onChangeBy]);

  const handleRemove = useCallback(() => {
    onRemove(item.id);
  }, [item.id, onRemove]);

  return (
    <li className="grid grid-cols-12 gap-4 items-center border-b border-gray-200 pb-4 md:pb-2 ">
      <div className="col-span-2 md:col-span-3 ">
        <div className="bg-bg-color-two rounded-2xl p-4 aspect-square flex items-center justify-center overflow-hidden lg:w-[213px] lg:h-[196px] h-[60px] w-[60px]">
          <Image
            src={item.image}
            alt={item.name}
            width={164}
            height={164}
            sizes="(max-width: 768px) 44px, 164px"
            className="h-auto w-auto max-h-[164px] max-w-[164px] lg:max-h-[164px] lg:max-w-[164px] rounded-2xl"
            priority={false}
          />
        </div>
      </div>

      <div className="col-span-3 md:col-span-3 font-medium text-gray-900 text-sm sm:text-base">
        <div className="flex items-center justify-between md:justify-start gap-2">
          <span>{item.name}</span>
          {/* <button
            onClick={handleRemove}
            aria-label={`Remove ${item.name}`}
            className="md:hidden p-2 rounded hover:bg-gray-100 hidden"
          >
            <Trash2 className="w-4 h-4 text-gray-700" />
          </button> */}
        </div>
      </div>

      <div className=" col-span-2 text-center  text-gray-900">
        {formatCurrency(item.price)}
      </div>

      <div className="col-span-3 md:col-span-2 mt-3 md:mt-0">
        <div className="flex items-center justify-center gap-2">
          <Button
            onClick={handleDecrement}
            variant="primary-outline"
            aria-label={`Decrease quantity of ${item.name}`}
            className="md:w-8! md:h-8! w-5! h-5! rounded! flex items-center justify-center  before:rounded! transition-colors px-1! py-0!"
          >
            <Minus className="md:w-4 w-3 md:h-4 h-3" />
          </Button>
          <input
            type="number"
            min={1}
            value={item.quantity}
            onChange={handleQuantityChange}
            aria-label={`Quantity for ${item.name}`}
            className="md:w-14 md:h-8 w-5 h-5 text-center border border-gray-900 rounded! bg-white font-bold [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [appearance:textfield]"
          />
          <Button
            onClick={handleIncrement}
            aria-label={`Increase quantity of ${item.name}`}
            className="md:w-8! md:h-8! w-5! h-5! px-1! py-0! border border-gray-900 rounded! flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <Plus className="md:w-4 w-3 md:h-4 h-3" />
          </Button>
        </div>
      </div>

      <div className="col-span-2 md:col-span-2 text-right font-bold text-gray-900 mt-3 md:mt-0">
        {formatCurrency(item.price * item.quantity)}
      </div>
    </li>
  );
});

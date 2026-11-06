import React from 'react';
import { useNavigate } from '../../../shared/hooks/financeNavigation';

interface OrderTopNavProps {
  active: 'orders' | 'recharge';
  onActiveRefresh?: () => void | Promise<void>;
}

export const OrderTopNav: React.FC<OrderTopNavProps> = ({ active, onActiveRefresh }) => {
  const navigate = useNavigate();

  const handleOrdersClick = () => {
    if (active === 'orders') {
      void onActiveRefresh?.();
      return;
    }
    navigate('/order-list');
  };

  const handleRechargeClick = () => {
    if (active === 'recharge') {
      void onActiveRefresh?.();
      return;
    }
    navigate('/recharge-list');
  };

  return (
    <div className="grid grid-cols-3 gap-2 p-1.5 rounded-lg bg-black/40 border border-white/10 w-full max-w-[560px] md:max-w-[760px] lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1180px] h-12 backdrop-blur-md shadow-lg items-center">
      <button type="button"
        onClick={handleOrdersClick}
        className={`w-full h-full rounded-lg font-bold text-sm md:text-[15px] transition-all flex items-center justify-center ${
          active === 'orders'
            ? 'bg-white/10 border border-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]'
            : 'text-white/50 hover:text-white/90 hover:bg-white/5 border border-transparent'
        } select-none [-webkit-tap-highlight-color:transparent]`}
      >
        Orders
      </button>

      <button type="button"
        onClick={handleRechargeClick}
        className={`w-full h-full rounded-lg font-bold text-sm md:text-[15px] transition-all flex items-center justify-center ${
          active === 'recharge'
            ? 'bg-white/10 border border-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]'
            : 'text-white/50 hover:text-white/90 hover:bg-white/5 border border-transparent'
        } select-none [-webkit-tap-highlight-color:transparent]`}
      >
        Recharge
      </button>

      <button type="button"
        onClick={() => navigate('/')}
        className="w-full h-full rounded-lg font-bold text-sm md:text-[15px] transition-all flex items-center justify-center text-white/50 hover:text-white/90 hover:bg-white/5 border border-transparent select-none [-webkit-tap-highlight-color:transparent]"
      >
        Home
      </button>
    </div>
  );
};

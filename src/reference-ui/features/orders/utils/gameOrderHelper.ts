import type { CanonicalOrder } from '../types/order.types';

export interface GameField {
  label: string;
  value: string;
}

/**
 * Resolves the game/product identifier (e.g. 'mlbb', 'arena_breakout', 'pubg')
 */
export const resolveOrderProduct = (order: Partial<CanonicalOrder>): string => {
  if (order.product) {
    return order.product.toLowerCase();
  }
  if (order.gameType) {
    return order.gameType.toLowerCase();
  }

  return '';
};

/**
 * Resolves the dynamic game fields (Game ID, Server ID, Region, etc.)
 */
export const resolveOrderGameFields = (order: Partial<CanonicalOrder>): GameField[] => {
  if (order.gameFields && order.gameFields.length > 0) {
    return order.gameFields;
  }

  const fields: GameField[] = [];

  // Primary Game ID
  if (order.uid) {
    fields.push({ label: 'Game ID', value: String(order.uid) });
  }

  // Explicit Server ID
  if (order.serverId) {
    fields.push({ label: 'Server ID', value: String(order.serverId) });
  }

  // Explicit Region
  if (order.region) {
    fields.push({ label: 'Region', value: String(order.region) });
  }

  // Fallback from serverTag when serverId/region are not explicitly provided
  if (!order.serverId && !order.region && order.serverTag) {
    const rawTag = order.serverTag.trim();
    const lowerTag = rawTag.toLowerCase();

    if (/^\d+$/.test(rawTag)) {
      fields.push({ label: 'Server ID', value: rawTag });
    } else if (['asia', 'glb', 'sea', 'eu', 'na'].includes(lowerTag)) {
      fields.push({ label: 'Region', value: rawTag });
    } else if (lowerTag === 'bls') {
      // 'bls' is a product/game tag for Arena Breakout; no separate server/region field
    } else {
      fields.push({ label: 'Server ID', value: rawTag });
    }
  }

  return fields;
};

/**
 * Formats the compact UiD representation according to the dynamic field rules:
 * - If only Game ID is present: Game ID + (Product) -> e.g. "588166746086 (arena_breakout)"
 * - If 2 or more fields are present (e.g. Game ID + Server ID or Region):
 *   Takes the 1st primary ID and the 2nd field's value in parentheses -> e.g. "1800345810 (18683)" or "1800345810 (asia)"
 */
export const resolveOrderUidDisplay = (order: Partial<CanonicalOrder>): string => {
  const primaryId = String(order.uid || '').trim();
  const fields = resolveOrderGameFields(order);
  const product = resolveOrderProduct(order);

  // Secondary fields (all non-Game ID fields)
  const secondaryFields = fields.filter((f) => f.label.toLowerCase() !== 'game id');

  if (secondaryFields.length > 0 && secondaryFields[0]?.value) {
    return `${primaryId} (${secondaryFields[0].value})`;
  }

  return product ? `${primaryId} (${product})` : (primaryId || '—');
};

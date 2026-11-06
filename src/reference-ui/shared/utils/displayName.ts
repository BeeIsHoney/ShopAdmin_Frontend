interface NamedUser {
  displayName?: string | null;
  username?: string | null;
  userName?: string | null;
}

export const displayName = (user: NamedUser | null | undefined): string =>
  user?.displayName?.trim() || user?.username?.trim() || user?.userName?.trim() || 'Unknown';

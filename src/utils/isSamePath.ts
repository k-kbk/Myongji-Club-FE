export default function isSamePath(path: string, navHref: string): boolean {
  if (navHref === '/') {
    return path === navHref;
  }
  return path.startsWith(navHref);
}

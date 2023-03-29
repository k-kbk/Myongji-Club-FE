export default function isSamePath(path: string, navHref: string): boolean {
  if (navHref === '/' || navHref === '/admin') {
    return path === navHref;
  }
  return path.startsWith(navHref);
}

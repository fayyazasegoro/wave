import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: Array<{ name: string; value: string; options?: any }>) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const isPlaceholderSupabase =
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder");

  let user = null;
  if (!isPlaceholderSupabase) {
    try {
      const { data } = await supabase.auth.getUser();
      user = data.user;
    } catch {
      // In offline / placeholder mode, gracefully fallback
    }
  }

  const pathname = request.nextUrl.pathname;

  // Protected app routes
  const appRoutes = [
    "/dashboard",
    "/radar",
    "/forecast",
    "/beyond-the-wave",
    "/innovate",
    "/opportunity",
    "/builder",
    "/business-launch",
    "/canvas",
    "/subscription",
    "/profile",
    "/settings",
  ];

  const isAppRoute = appRoutes.some((route) => pathname.startsWith(route));
  const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/signup");
  const isAdminRoute = pathname.startsWith("/admin");

  const hasDemoSession =
    isPlaceholderSupabase || Boolean(request.cookies.get("wave_session"));

  if (!user && !hasDemoSession && isAppRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  if (user && isAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  // Admin protection - add proper admin check in production
  if (isAdminRoute && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

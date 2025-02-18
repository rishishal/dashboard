"use client";

import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function NavHeader() {
  const [pathSegments, setPathSegments] = useState<string[]>([]);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname) {
      const segments = pathname.split("/").filter(Boolean);
      setPathSegments(segments);
    }
  }, [pathname]);

  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to="/">Dashboard</Link>
          <BreadcrumbSeparator className="hidden md:inline-block" />
          {pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            const isLast = index === pathSegments.length - 1;

            return (
              <Link
                key={href}
                to={href}
                className={cn(
                  "capitalize cursor-pointer font-semibold flex items-center gap-1",
                  isLast && "text-black"
                )}
              >
                <span>{segment.replace(/-/g, " ")}</span>
                {!isLast && (
                  <BreadcrumbSeparator className="hidden md:inline-block" />
                )}
              </Link>
            );
          })}
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

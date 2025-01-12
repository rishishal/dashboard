"use client";

import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

import { useEffect, useState } from "react";

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
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          return (
            <BreadcrumbItem key={href}>
              <BreadcrumbLink
                href={isLast ? undefined : href}
                className={`capitalize cursor-pointer ${
                  isLast ? "text-gray-500" : ""
                }`}
              >
                {segment.replace(/-/g, " ")}
              </BreadcrumbLink>
              {!isLast && (
                <BreadcrumbSeparator className="hidden md:inline-block" />
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

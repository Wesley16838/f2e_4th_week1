import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import image from "./assets/images/week1_cover.png";
import styles from './styles/style.css';
import Layout from "./layouts/Layout";

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "The F2E 前端 & UI 修煉精神時光屋",
  viewport: "width=device-width,initial-scale=1",
  description: "你想變強嗎？你想獲得力量嗎？你想透過前端 / UI 改變你的生活，但找不到地方修練嗎?如果你的答案是「 Yes 」那麼你來對地方了!",
  image: image
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

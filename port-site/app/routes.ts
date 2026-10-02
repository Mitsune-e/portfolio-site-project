import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("cuidado-amigo", "routes/cuidado-amigo.tsx"),
	route("mercado-publico", "routes/mercado-publico.tsx"),
] satisfies RouteConfig;

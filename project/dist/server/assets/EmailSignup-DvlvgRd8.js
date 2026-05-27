import { a7 as useRouter, V as reactExports, I as isRedirect, T as TSS_SERVER_FUNCTION, z as getServerFnById, j as createServerFn, L as jsxRuntimeExports } from "./server-C1jvFsDS.js";
import { t as toast } from "./router-I3TUVc4j.js";
import { o as objectType, s as stringType } from "./types-DGfzljZx.js";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const schema = objectType({
  email: stringType().trim().email().max(255)
});
const subscribeEmail = createServerFn({
  method: "POST"
}).inputValidator((input) => schema.parse(input)).handler(createSsrRpc("9aeb2a0838b5c4f618356f26ce7663cf7ad69c8fc86148f8280b7452144301d6"));
function EmailSignup() {
  const subscribe = useServerFn(subscribeEmail);
  const [email, setEmail] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await subscribe({ data: { email } });
      if (res.ok) {
        toast.success(res.alreadySubscribed ? "You're already on the list." : "Subscribed. Watch your inbox.");
        setEmail("");
      } else {
        toast.error(res.error);
      }
    } catch (err) {
      toast.error("Please enter a valid email address.");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "flex flex-col sm:flex-row gap-3 max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "email",
        required: true,
        value: email,
        onChange: (e) => setEmail(e.target.value),
        placeholder: "your@email.com",
        className: "flex-1 h-12 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        disabled: loading,
        className: "h-12 px-6 bg-foreground text-background text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity",
        children: loading ? "Subscribing…" : "Subscribe"
      }
    )
  ] });
}
export {
  EmailSignup as E
};

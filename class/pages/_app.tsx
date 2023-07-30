import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <div>===== 여기는 _app.js 컴포넌트 시작 부분입니다 ========</div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>

      <div>===== 여기는 _app.js 컴포넌트 마지막 부분입니다 ========</div>
    </div>
  );
}

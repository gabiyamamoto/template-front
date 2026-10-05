import SeriesList from "@/components/SeriesListLikSSR";
import { Skeleton } from "antd";
import { Suspense } from "react";

export default function page() {
    return (
        <main>
            <h2>Get - Raed</h2>
            <p>O servidor chama a API com api-key privada, o Skeleton aparece até que as séries cheguem usando a tag nativa do Reat (Suspense).</p>
            <p>Abra o DevTools - Network: a chamada à API não aparece. Clique numa série para buscá-la pelo ID.</p>
            <Suspense fallback={
                <div className="skeleton">
                    <Skeleton active />
                </div>
            }/>
        </main>
    )
}
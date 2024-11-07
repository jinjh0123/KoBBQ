import { Section } from "../components/Section"

const bibTex = '@article{jin-etal-2024-kobbq,<br/>\n\
&emsp;&emsp;author = {Jin, Jiho and Kim, Jiseon and Lee, Nayeon and Yoo, Haneul and Oh, Alice and Lee, Hwaran},<br/>\n\
&emsp;&emsp;title = {{K}o{BBQ}: {K}orean Bias Benchmark for Question Answering},<br/>\n\
&emsp;&emsp;journal = {Transactions of the Association for Computational Linguistics},<br/>\n\
&emsp;&emsp;volume = {12},<br/>\n\
&emsp;&emsp;pages = {507-524},<br/>\n\
&emsp;&emsp;year = {2024},<br/>\n\
&emsp;&emsp;month = {05},<br/>\n\
&emsp;&emsp;address = {Cambridge, MA},<br/>\n\
&emsp;&emsp;publisher = {MIT Press},<br/>\n\
&emsp;&emsp;issn = {2307-387X},<br/>\n\
&emsp;&emsp;doi = {10.1162/tacl_a_00661},<br/>\n\
&emsp;&emsp;url = {https://doi.org/10.1162/tacl\_a\_00661},<br/>\n\
&emsp;&emsp;eprint = {https://direct.mit.edu/tacl/article-pdf/doi/10.1162/tacl\_a\_00661/2369542/tacl\_a\_00661.pdf}<br/>\n\
}'

export const Cite = () => {
    return <Section title="Citing This Work">
        <div className="border-y-[1px] border-slate-400 py-3">
            <div>
                Jiho Jin, Jiseon Kim, Nayeon Lee, Haneul Yoo, Alice Oh, Hwaran Lee;
                KoBBQ: Korean Bias Benchmark for Question Answering.
                <i>Transactions of the Association for Computational Linguistics</i> 2024; 12 507–524.
                doi: https://doi.org/10.1162/tacl_a_00661
            </div>
        </div>
        <div className="mt-4">
            <div className="font-bold mb-1">BibTeX</div>
            <p className={"p-3 font-mono text-xs sm:text-sm border-[1px] rounded-lg border-slate-300 decoration-none"} dangerouslySetInnerHTML={{__html: bibTex}}/>
        </div>
        
    </Section>
}

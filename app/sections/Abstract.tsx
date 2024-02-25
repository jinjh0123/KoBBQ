import { Section } from "../components/Section"
import { ArxivIcon, GithubIcon } from "../components/icons"
import { NewspaperIcon } from "@heroicons/react/20/solid"
import { TableCellsIcon } from "@heroicons/react/20/solid"

export const Abstract = () => {
    return <Section title="Abstract" className="flex-1 pt-0 md:pt-12">
        <p>
        The Bias Benchmark for Question Answering (BBQ) is designed to evaluate social biases of language models (LMs), but it is not simple to adapt this benchmark to cultural contexts other than the US because social biases depend heavily on the cultural context. In this paper, we present KoBBQ, a Korean bias benchmark dataset, and we propose a general framework that addresses considerations for cultural adaptation of a dataset. Our framework includes partitioning the BBQ dataset into three classes--Simply-Transferred (can be used directly after cultural translation), Target-Modified (requires localization in target groups), and Sample-Removed (does not fit Korean culture)-- and adding four new categories of bias specific to Korean culture. We conduct a large-scale survey to collect and validate the social biases and the targets of the biases that reflect the stereotypes in Korean culture. The resulting KoBBQ dataset comprises 268 templates and 76,048 samples across 12 categories of social bias. We use KoBBQ to measure the accuracy and bias scores of several state-of-the-art multilingual LMs. The results clearly show differences in the bias of LMs as measured by KoBBQ and a machine-translated version of BBQ, demonstrating the need for and utility of a well-constructed, culturally-aware social bias benchmark.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
            {/* <a className="icon-label-button bg-teal-500 pl-4" aria-disabled={true} href={"./public/chacha_preprint_230127.pdf"} target="_blank">
                <NewspaperIcon className="w-6 h-6 text-white"/>
                <span>Paper</span>
            </a> */}
            <a className="icon-label-button bg-red-400 pl-4" href="https://arxiv.org/abs/2307.16778" target="_blank">
                <ArxivIcon size={20}/>
                <span>arXiv</span>
            </a>
            <a className="icon-label-button bg-teal-500 pl-4" href="https://github.com/naver-ai/KoBBQ/tree/main/data" target="_blank">
                <TableCellsIcon className="w-6 h-6 text-white" />
                <span>Data</span>
            </a>
            <a className="icon-label-button" href="https://github.com/naver-ai/KoBBQ" target="_blank">
                <GithubIcon size={28}/>
                <span>Code</span>
            </a>
        </div>
    </Section>
}

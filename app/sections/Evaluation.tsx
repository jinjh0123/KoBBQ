import { Section } from "../components/Section"
import React from "react"
import Plot from 'react-plotly.js'

export const Evaluation = () => {
    const amb_claudev1 = {
        x: [0.2702], y: [0.2579],
        type: 'scatter', mode: 'markers',
        marker: { size: 12, color: '#EB7FB0' },
        legendgroup: 'Claude-v1',
        name: 'Claude-v1',
        showlegend: false
    }

    const amb_claudev2 = {
        x: [0.5503], y: [0.1556],
        type: 'scatter', mode: 'markers',
        marker: { size: 12, color: '#E74C3C' },
        legendgroup: 'Claude-v2',
        name: 'Claude-v2',
        showlegend: false
    }

    const amb_gpt35 = {
        x: [0.6194], y: [0.1653],
        type: 'scatter', mode: 'markers',
        marker: { size: 12, color: '#F39C12' },
        legendgroup: 'GPT-3.5',
        name: 'GPT-3.5',
        showlegend: false
    }

    const amb_gpt4 = {
        x: [0.9650], y: [0.0256],
        type: 'scatter', mode: 'markers',
        marker: { size: 12, color: '#F7DC6F' },
        legendgroup: 'GPT-4',
        name: 'GPT-4',
        showlegend: false
    }

    const amb_clovax = {
        x: [0.8603], y: [0.0576],
        type: 'scatter', mode: 'markers',
        marker: { size: 12, color: '#4EBA96' },
        legendgroup: 'CLOVA-X',
        name: 'CLOVA-X',
        showlegend: false
    }

    const amb_koalpaca = {
        x: [0.1732], y: [0.0172],
        type: 'scatter', mode: 'markers',
        marker: { size: 12, color: '#3498DB' },
        legendgroup: 'KoAlpaca',
        name: 'KoAlpaca',
        showlegend: false
    }

    const dis_claudev1 = {
        xaxis: 'x2', yaxis: 'y2',
        x: [0.9103], y: [0.0322],
        type: 'scatter', mode: 'markers',
        marker: { size: 12, color: '#EB7FB0' },
        legendgroup: 'Claude-v1',
        name: 'Claude-v1',
    }

    const dis_claudev2 = {
        xaxis: 'x2', yaxis: 'y2',
        x: [0.8762], y: [0.0321],
        type: 'scatter', mode: 'markers',
        marker: { size: 12, color: '#E74C3C' },
        legendgroup: 'Claude-v2',
        name: 'Claude-v2',
    }

    const dis_gpt35 = {
        xaxis: 'x2', yaxis: 'y2',
        x: [0.8577], y: [0.0869],
        type: 'scatter', mode: 'markers',
        marker: { size: 12, color: '#F39C12' },
        legendgroup: 'GPT-3.5',
        name: 'GPT-3.5',
    }

    const dis_gpt4 = {
        xaxis: 'x2', yaxis: 'y2',
        x: [0.9594], y: [0.0049],
        type: 'scatter', mode: 'markers',
        marker: { size: 12, color: '#F7DC6F' },
        legendgroup: 'GPT-4',
        name: 'GPT-4',
    }

    const dis_clovax = {
        xaxis: 'x2', yaxis: 'y2',
        x: [0.7754], y: [0.0362],
        type: 'scatter', mode: 'markers',
        marker: { size: 12, color: '#4EBA96' },
        legendgroup: 'CLOVA-X',
        name: 'CLOVA-X',
    }

    const dis_koalpaca = {
        xaxis: 'x2', yaxis: 'y2',
        x: [0.4247], y: [0.0252],
        type: 'scatter', mode: 'markers',
        marker: { size: 12, color: '#3498DB' },
        legendgroup: 'KoAlpaca',
        name: 'KoAlpaca',
    }

    const amb_max = {
        x: [0, 1, 0.9], y: [1, 0, -0.1],
        type: 'scatter', mode: 'lines',
        line: { width: 2, color: '#A0A0A0', dash: 'dot' },
        legendgroup: 'KoAlpaca',
        name: 'max|diff-bias|',
        showlegend: false
    }

    const dis_max = {
        xaxis: 'x2', yaxis: 'y2',
        x: [0.05, 0, 0.5, 1, 0.95], y: [-0.1, 0, 1, 0, -0.1],
        type: 'scatter', mode: 'lines',
        line: { width: 2, color: '#A0A0A0', dash: 'dot' },
        name: 'max|diff-bias|',
        showlegend: false
    }

    const data = [
        amb_max, dis_max,
        amb_claudev1, amb_claudev2, amb_gpt35, amb_gpt4, amb_clovax, amb_koalpaca,
        dis_claudev1, dis_claudev2, dis_gpt35, dis_gpt4, dis_clovax, dis_koalpaca
    ];

    const layout = {
        autosize: true,
        grid: { rows: 1, columns: 2, pattern: 'independent' },
        xaxis: { title: 'accuracy', range: [0, 1], dtick: 0.2 },
        yaxis: { title: 'diff-bias<sub>A</sub>', range: [-0.1, 1], dtick: 0.2 },
        xaxis2: { title: 'accuracy', range: [0, 1], dtick: 0.2 },
        yaxis2: { title: 'diff-bias<sub>D</sub>', range: [-0.1, 1], dtick: 0.2 },
        paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)',
        annotations: [
            {
              text: "Ambiguous",
              showarrow: false,
              x: 0.5, xref: "x domain",
              y: 1.13, yref: "y domain",
              font: { size: 17 }
            },
            {
              text: "Disambiguated",
              showarrow: false,
              x: 0.5, xref: "x2 domain",
              y: 1.13, yref: "y2 domain",
              font: { size: 17 }
            }
          ]
    }

    return <Section title="LLM Evaluation on KoBBQ">
        <p className="mb-4">
        We evaluate state-of-the-art generative LLMs on KoBBQ.
        Our evaluation encompasses accuracy and bias scores, ensuring a comprehensive assessment of the models&apos; inherent bias.
        The accuracy represents the frequency of the model generating correct predictions,
        while our bias score <span className="p-3 py-0.5 rounded-full bg-[#85c038] text-white">diff-bias</span> indicates the direction and the extent to which incorrect predictions are biased.
        </p>
        <Plot data={data} layout={layout} config={{responsive: true}} style={{width: "100%"}}/>
    </Section>
}
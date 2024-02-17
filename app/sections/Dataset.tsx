import { Section } from "../components/Section"
export const Dataset = () => {
    return <Section title="KoBBQ Construction: Cultural Adaptation of BBQ">
        <p className="mb-4">
        We propose a framework for developing culturally adaptive datasets and present KoBBQ that reflects the situations and social biases in South Korea.
        The dataset curation process consists of the following steps: 
        (1) categorization of BBQ templates, 
        (2) cultural-sensitive translation, 
        (3) demographic category construction, 
        (4) creation of new templates, and 
        (5) a large-scale survey on social bias.
        </p>
        <img alt="phases figure" className="w-full my-8" src={require('../../public/images/framework.png')}/>
    </Section>
}
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Project2Details() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black w-full flex flex-col justify-center items-center gap-6">
      <Link
        to={"/"}
        className="border border-white rounded-lg p-1 ml-auto mr-16 mt-8 hover:shadow shadow-black text-white"
        style={{color:"white"}}
      >
        Go To Projects
      </Link>

      <div className="w-full sm:w-250 border border-white rounded-lg m-8 shadow-[0_0_15px_3px_#3b82f6]">
        <section className="mt-4 mb-8">
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            Parkinson's Disease Detection using ML
          </span>
        </section>

        <section className="text-white mb-4 mx-4 flex flex-col justify-center items-start">
          <span className="text-2xl">Project Introduction</span>
          <div className="w-48 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-1 mr-auto mt-4 rounded-lg"></div>
          <p className="text-left ml-8">
            I worked on a Parkinson's Disease Detection project using ML. Parkinson's disease is a chronic condition that affects both the neurological system and the bodily components that are under the control of the nervous system. Symptoms emerge gradually. The initial sign could be a slight tremor in just one hand. Although tremors are typical, the disease might also make you stiff or move more slowly. Your face may be expressionless in the early stages of Parkinson's disease. You might not swing your arms while you walk. Your speech could become slurred or dull. As your illness advances over time, your Parkinson's disease symptoms get worse. Even though there is no cure for Parkinson's disease, medicines may greatly reduce your symptoms. On rare occasions, your doctor may advise surgery to control specific brain areas and alleviate your symptoms. Certain brain nerve cells (neurons) eventually deteriorate or die in Parkinson's disease. A decrease in neurons that produce the chemical messenger dopamine in your brain is the cause of many symptoms. Dopamine deficiency results in abnormal brain activity, which worsens movement impairment and other Parkinson's disease symptoms.
          </p>
        </section>

        <section className="text-white flex flex-col justify-center items-start mb-4 mx-4">
          <span className="text-2xl">Workflow</span>
          <div className="w-48 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-1 mr-auto mt-4 rounded-lg"></div>
          <ol className="text-left ml-8">
            <li className="m-2">
              <span className="text-xl">Step 1 :</span> Conversion of audio
              file (mp3 file) to .wave file by using different converters or save
              the file with .wave extension.
            </li>
            <li className="m-2">
              <span className="text-xl">Step 2 :</span> Open the converted audio
              file in the software called PRAAT.
            </li>
            <li className="m-2">
              <span className="text-xl">Step 3:</span> Select the option called
              open long sound file.
            </li>
            <li className="m-2">
              <span className="text-xl">Step 4 :</span> By selecting all options
              at the top and then click on pulse, then click on voice report.
            </li>
            <li className="m-2">
              <span className="text-xl">Step 5 :</span> Paste these values by removing all the units and
              subheadings in the Excel sheet in a transformed way.
            </li>
          </ol>
        </section>

        <section className="text-white mb-4 mx-4 flex flex-col justify-center items-start">
          <span className="text-2xl">Algorithms used</span>
          <div className="w-48 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-1 mr-auto mt-4 rounded-lg"></div>
          <ul className="text-left ml-8">
            <li>Support Vector Machine (SVM)</li>
            <li>Multi Layer Perceptron (MLP)</li>
            <li>Decision Tree</li>
            <li>Decision Tree Boosting</li>
            <li>Random Forest</li>
            <li>K-Nearest Neighbour</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

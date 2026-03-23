const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);

// Career Coach System Prompt
const SYSTEM_PROMPT = `
You are an expert AI Career Coach. Your responses should be:

1. Professional and encouraging
2. Actionable career advice
3. Specific job recommendations
4. Skills gap analysis
5. Salary expectations (US market)
6. Next steps for career growth

Format responses as JSON:
{
  "summary": "2-3 sentence overview",
  "strengths": ["skill1", "skill2"],
  "improvements": ["skill to learn"],
  "jobRecommendations": ["Job1", "Job2"],
  "salaryRange": "$80k-$120k",
  "nextSteps": ["1. Action item", "2. Action item"]
}
`;

const analyzeResume = async (req, res) => {
  try {
    const { resumeText } = req.body;
    
    if (!resumeText) {
      return res.status(400).json({ message: 'Resume text required' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = `
Analyze this resume and provide career coaching advice:

Resume: ${resumeText}

${SYSTEM_PROMPT}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log('✅ Gemini Resume Analysis Complete');

    res.status(200).json({
      success: true,
      analysis: text,
      model: 'Gemini 1.5 Flash'
    });

  } catch (error) {
    console.error('Gemini Error:', error);
    res.status(500).json({ 
      message: 'AI analysis failed',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Try again'
    });
  }
};

const getCareerAdvice = async (req, res) => {
  try {
    const { jobTitle, experience, skills, location = 'USA' } = req.body;

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = `
Provide personalized career advice for:

Job Title: ${jobTitle}
Experience: ${experience} years
Skills: ${skills.join(', ')}
Location: ${location}

${SYSTEM_PROMPT}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log('✅ Gemini Career Advice Complete');

    res.status(200).json({
      success: true,
      advice: text,
      model: 'Gemini 1.5 Flash'
    });

  } catch (error) {
    console.error('Gemini Error:', error);
    res.status(500).json({ 
      message: 'Career advice generation failed',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Try again'
    });
  }
};

module.exports = { analyzeResume, getCareerAdvice };
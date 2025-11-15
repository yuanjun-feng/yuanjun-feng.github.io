#!/usr/bin/env python3
"""
Script to generate resume.json from Python data structure.
This allows for comments and easier editing than raw JSON.
"""

import json
from datetime import datetime

# Resume data structure - edit this section to update your resume
resume_data = {
    "last_updated": "2025-10",
    "basics": {
        "name": "Yuanjun Feng",
        "status": "Ph.D. Student in Information Systems",
        "location": {
            "city": "Lausanne",
            "country": "Switzerland"
        },
        "email": "yuanjun.feng@unil.ch",
        "phone": "+41 762645049",
        "profiles": [
            {
                "network": "LinkedIn",
                "username": "yuanjun-feng",
                "url": "https://www.linkedin.com/in/yuanjun-feng/"
            },
            {
                "network": "GitHub",
                "username": "diana3135",
                "url": "https://github.com/diana3135"
            }
        ],
        "Research Interests": [
            "LLM/AI Agents",
            "Human-Centered NLP",
            "Computational Social Science"
        ]
    },
    "education": [
        {
            "institution": "HEC Lausanne, Université de Lausanne",
            "studyType": "Ph.D.",
            "area": "Information Systems",
            "startDate": "2024",
            "endDate": "2028",
            "endDate_expected": True,
            "advisor": {
                "name": "Prof. Yash Raj Shrestha",
                "url": "https://wp.unil.ch/aail/members/prof-yash-raj-shrestha/"
            }
        },
        {
            "institution": "École Polytechnique Fédérale de Lausanne",
            "studyType": "M.Sc.",
            "area": "Management, Technology, and Entrepreneurship (Data Science)",
            "minor": "Energy",
            "startDate": "2020-09",
            "endDate": "2023-09"
        },
        {
            "institution": "Huazhong University of Science and Technology",
            "studyType": "B.Eng.",
            "area": "Energy and Power Engineering",
            "startDate": "2016-09",
            "endDate": "2020-06"
        },
        {
            "institution": "Huazhong University of Science and Technology",
            "studyType": "B.Econ.",
            "area": "Economics",
            "startDate": "2016-09",
            "endDate": "2020-06"
        }
    ],
    "publications": [
        {
            "title": "Noise, Adaptation, and Strategy: Assessing LLM Fidelity in Decision-Making",
            "authors": ["**Yuanjun Feng**", "Vivek Choudhary", "Yash Raj Shrestha"],
            "dateRange": {"start": "2025-01", "end": "2025-05"},
            "venue": "EMNLP 2025 (CORE A<sup>*</sup>)",
            "status": "Accepted",
            "url": "https://aclanthology.org/2025.emnlp-main.391.pdf"
        },
        {
            "title": "The Effect of Education in Prompt Engineering: Evidence from Journalists",
            "authors": ["Amirsiavosh Bashardoust<sup>*</sup>", "**Yuanjun Feng<sup>*</sup>**", "Dominique Geissler<sup>*</sup>", "Stefan Feuerriegel", "Yash Raj Shrestha"],
            "equal_contribution_note": "<sup>*</sup> indicates equal contribution",
            "dateRange": {"start": "2024-03", "end": "2024-09"},
            "venue": "AAAI ICWSM 2026 (CORE A)",
            "status": "Accepted",
            "url": "https://arxiv.org/abs/2409.12320"
        },
        {
            "title": "Contextualizing Recommendation Explanations with LLMs: A User Study",
            "authors": ["**Yuanjun Feng**", "Stefan Feuerriegel", "Yash Raj Shrestha"],
            "dateRange": {"start": "2023-09", "end": "2024-07"},
            "venue": "AAAI ICWSM 2026 (CORE A)",
            "status": "Accepted",
            "url": "https://arxiv.org/abs/2501.12152"
        },
        # Uncomment to include this publication:
        # {
        #     "title": "Gender Occupation Bias in Multilingual LLMs Under Contextualized Tasks",
        #     "authors": ["**Yuanjun Feng**", "Tanzhou Liu", "Stefan Feuerriegel", "Yash Raj Shrestha"],
        #     "dateRange": {"start": "2024-09", "end": None},
        #     "venue": "AAAI 2026",
        #     "status": "Submitted",
        #     "url": None
        # }
    ],
    "work": [
        {
            "name": "Legartis Technology AG",
            "position": "Machine Learning Engineer Intern",
            "location": "Zurich, Switzerland",
            "startDate": "2022-07",
            "endDate": "2023-03",
            "highlights": [
                "Optimized text-classification pipeline by integrating six monolingual classifiers in PyTorch.",
                "Deployed models with 83% reduction in training footprint.",
                "Built report-generation feature using FastAPI within a Django-based workflow.",
                "Led data ETL to enable a legal Q&A model."
            ]
        },
        {
            "name": "Z-PUNKT Consulting",
            "position": "Business Analyst Intern",
            "location": "Zurich, Switzerland",
            "startDate": "2021-09",
            "endDate": "2022-06",
            "highlights": [
                "Maintained MS365 collaboration platform to enhance team productivity and communication.",
                "Developed automated workflows with Power Automate and interactive dashboards with Power BI."
            ]
        }
    ],
    "teaching": [
        {
            "course": "Artificial Intelligence in Business",
            "level": "BSc",
            "institution": "Université de Lausanne",
            "startDate": "2023",
            "endDate": None,
            "role": "Teaching Support & Lecturer",
            "notes": "2023 – Present"
        }
    ],
    "presentations": [
        {
            "title": "AI Safety and Regulation Workshop",
            "year": 2025,
            "location": "Lausanne, Switzerland"
        },
        {
            "title": "Pujiang Innovation Forum - AI & Ethics: Sino-Swiss Intercultural Dialogue",
            "year": 2024,
            "location": "Shanghai, China"
        }
    ],
    "service": [
        {
            "role": "Reviewer",
            "venues": [
                {
                    "name": "International Conference on Wirtschaftsinformatik",
                    "years": "2024–Present"
                },
                {
                    "name": "ACM CHI Conference on Human Factors in Computing Systems",
                    "years": "2024–Present"
                },
                {
                    "name": "The International AAAI Conference on Web and Social Media (ICWSM)",
                    "years": "2025–Present"
                }
            ]
        }
    ]
}


def filter_none_values(obj):
    """Recursively remove None values from the data structure."""
    if isinstance(obj, dict):
        return {k: filter_none_values(v) for k, v in obj.items() if v is not None}
    elif isinstance(obj, list):
        return [filter_none_values(item) for item in obj if item is not None]
    else:
        return obj


def filter_commented_items(obj):
    """Remove items that are commented out (None values in lists)."""
    if isinstance(obj, dict):
        return {k: filter_commented_items(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        # Filter out None values (which represent commented items)
        filtered = [filter_commented_items(item) for item in obj if item is not None]
        return filtered
    else:
        return obj


def generate_json():
    """Generate the resume.json file from the Python data structure."""
    # Filter out None values and commented items
    filtered_data = filter_commented_items(resume_data)
    filtered_data = filter_none_values(filtered_data)
    
    # Write to JSON file with proper formatting
    output_file = "resume.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(filtered_data, f, indent=2, ensure_ascii=False)
    
    print(f"✓ Successfully generated {output_file}")
    print(f"  Generated at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")


if __name__ == "__main__":
    generate_json()


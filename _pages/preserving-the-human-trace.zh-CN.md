---
layout: folio-post
title: "成为 HumanStudy-Hub 的贡献者"
date: 2026-11-09
author: Yuanjun Feng
description: 关于 silicon subjects、social simulation 与研究复现。
permalink: /blog/2026/preserving-the-human-trace/zh/
lang: zh-CN
translation_url: /blog/2026/preserving-the-human-trace/
translation_lang: en
---

关于 silicon subjects、social simulation 与研究复现

我的 AI 与社会科学交叉研究正式开始于 2024 年。感谢 Gordon Pennycook 等人的《虚假新闻与错误信息的行为研究实用指南》[1]，也感谢 D. Philippe 和 J. Petty 两位教授的《质性与混合方法研究》课程，我逐渐系统地学习了如何开展 human studies。

从研究问题与理论出发，明确研究设计，为验证性研究提出可检验的假设，再为定量部分做事前的 power analysis、规划样本量；设计问卷与访谈提纲，学习如何提问和追问，在必要的伦理审批和知情同意下开展预测试，完善方案，并在正式收集验证性数据前完成 preregistration；随后招募参与者、取得知情同意、开展研究，再进行统计分析与质性分析，将两类发现结合起来理解。这些环节逐渐从方法课上的术语，变成了我自己研究中的日常。

在 2024 和 2025 年的研究中，我也逐渐积累了自己的经验。这些工作后来形成了三篇论文：两篇发表于 ICWSM 2026 的研究，分别关于推荐解释与 AI 教育 [2][3]，以及关于创意工作中的 cognitive homophily [4]。其中，实验与后续访谈的结合，让我更具体地看到，一个个真实的人如何看待 AI。

无论是在我们举办的工作坊上学习 AI 知识、分享反馈，还是在我搭建的推荐平台或写作平台上接受 AI 的推荐和辅助，我都觉得自己在与这些使用者对话。我们支付了报酬，他们或许只是带着完成任务的心情来体验；但他们的信任与不信任、满意与不满，对我而言都很真实。

令人遗憾的是，即使研究流程合规、材料完整，留住数据也不等于留住了那次相遇。我们可以用原有的数据和代码重新分析，也可以重新招募参与者，检验研究结论是否成立；但这些都很难完整还原那时那刻的人与情境。有时，他们留下的痕迹，最终只定格在 GitHub 仓库中的一行行数据里。

曾经在实验中被参与者夸赞为“体贴”的 GPT-4o，也会面临版本更新和服务退役。同一句“你好”，得到的回应未必相同。固定 prompts 和 random seeds 有助于控制变异，却不足以保证跨版本、跨运行环境得到完全相同的结果。即使保存了原始对话，也很难重新拥有当时的体验。统计分析可以帮助我们估计效应与不确定性，但每一个人为什么信任、为什么犹豫，以及 AI 在怎样的过程中回应了他们的期待，仍可能在汇总之后变得模糊。

在我做的 model evaluation 工作里，我们让 AI agents 在不同的行为设定下完成拍卖等决策任务。我看到了它们根据指令与示例调整决策的能力，也看到了它们的策略有多么稳定：即使加入干预，它们表现出的轮次间波动仍少于人类。[5] 那种看起来异常冷静的表现，让我重新思考所谓的“人类决策中的噪声”。那些波动本身，或许也包含了我们需要理解的人类经验。

当这些 agents 被称作“silicon subjects”，被用来做 social simulation 时，“像不像人”开始不再是我唯一关心的问题。我更在意，我们希望它们在哪些行为、哪些过程上与人一致，又为什么。也许，执迷于制造一个人的完整 digital twin，或把“像不像人”当作唯一目标，本身就有些缘木求鱼。也许，我们有时像纳西索斯一样，太执着于在创造物中寻找自己的倒影。可我也会想到女娲造人：创造的美妙，或许也在于它会带来与创造者不同的存在。

基于种种，我很高兴能够为 HumanStudy-Hub 作出贡献。我们团队有一个很一致的愿望：帮助社科研究者留住人们在过去与现在留下的痕迹，在这个 AI 时代，尽可能保留每一次实验中理性与感性的痕迹。我们希望让论文中可分享的实验材料、研究流程，以及设计背后的思考，以结构化的方式留存下来，让后来的学者能够找到、理解，并继续使用它们。

研究者与参与者的思考和经验，都值得被看见。这或许也是在 AI slop 越来越多的今天，作为跨学科学者，我觉得自己还能做的一些事。

最后的最后，非常感谢所有看到这篇文章的人。感谢我们的工作能被看见。

## 参考文献

1. Pennycook, G., Binnendyk, J., Newton, C., & Rand, D. G. (2021). [A Practical Guide to Doing Behavioral Research on Fake News and Misinformation](https://doi.org/10.1525/collabra.25293). *Collabra: Psychology, 7*(1), 25293.

2. Feng, Y., Feuerriegel, S., & Shrestha, Y. R. (2026). [Contextualizing Recommendation Explanations with LLMs: A User Study](https://doi.org/10.1609/icwsm.v20i1.42667). *Proceedings of the International AAAI Conference on Web and Social Media, 20*(1), 788–803.

3. Bashardoust, A.\*, Feng, Y.\*, Geissler, D.\*, Feuerriegel, S., & Shrestha, Y. R. (2026). [The Effect of Education in Prompt Engineering: Evidence from Journalists](https://doi.org/10.1609/icwsm.v20i1.42634). *Proceedings of the International AAAI Conference on Web and Social Media, 20*(1), 218–234.

4. Feng, Y., Choudhary, V., Marchetti, A., Miron-Spektor, E., Puranam, P., Shrestha, Y. R., & Wu, N. (2026). [Cognitive Homophily in Human-AI ensembles: Explaining the Quality-Satisfaction Trade-off](https://doi.org/10.2139/ssrn.6924659). SSRN 工作论文。

5. Feng, Y., Choudhary, V., & Shrestha, Y. R. (2025). [Noise, Adaptation, and Strategy: Assessing LLM Fidelity in Decision-Making](https://aclanthology.org/2025.emnlp-main.391/). *Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing*, 7693–7706.

- 尽可能缓存已经展开了的短网址结果
- 如果连续的两条消息 A 和 B 都包含了同一个短网址 X，在 A 得到 X 的展开结果前 B 也请求展开 X，应该重用 A 的结果，避免多余的请求

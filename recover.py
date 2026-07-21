import json

with open('/Users/apple/.gemini/antigravity/brain/706ef410-a6e3-49d6-9efa-04b008732a4f/.system_generated/logs/transcript.jsonl', 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'PLANNER_RESPONSE':
                tool_calls = data.get('tool_calls', [])
                for tc in tool_calls:
                    if tc.get('name') == 'multi_replace_file_content' or tc.get('name') == 'replace_file_content':
                        args = tc.get('args', {})
                        if 'DiheirPage.tsx' in args.get('TargetFile', ''):
                            if 'TargetContent' in args:
                                with open('recovered.txt', 'w') as out:
                                    out.write(args['TargetContent'])
                                    print("Recovered from replace_file_content TargetContent!")
                            elif 'ReplacementChunks' in args:
                                with open('recovered_chunks.txt', 'a') as out:
                                    for chunk in args['ReplacementChunks']:
                                        out.write("==== CHUNK TARGET ====\n")
                                        out.write(chunk.get('TargetContent', ''))
                                        out.write("\n")
                                print("Recovered from multi_replace_file_content ReplacementChunks!")
        except Exception as e:
            pass

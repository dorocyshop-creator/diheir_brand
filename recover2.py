import json

with open('/Users/apple/.gemini/antigravity/brain/706ef410-a6e3-49d6-9efa-04b008732a4f/.system_generated/logs/transcript.jsonl', 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'PLANNER_RESPONSE':
                tool_calls = data.get('tool_calls', [])
                for tc in tool_calls:
                    if tc.get('name') == 'multi_replace_file_content':
                        args_str = tc.get('args', {})
                        # tc['args'] is a dict in standard format, but wait, the API might pass it as a JSON string or dict
                        # In the previous output it said:
                        # "args":{"CommandLine":"\"cat << 'EOF'...
                        # So values are strings containing JSON.
                        chunks = json.loads(args_str.get('ReplacementChunks', '[]'))
                        with open('recovered_chunks2.txt', 'w') as out:
                            for chunk in chunks:
                                out.write("==== CHUNK TARGET ====\n")
                                out.write(chunk.get('TargetContent', ''))
                                out.write("\n")
                    elif tc.get('name') == 'replace_file_content':
                        args_str = tc.get('args', {})
                        target_file = json.loads(args_str.get('TargetFile', '""'))
                        if 'DiheirPage' in target_file:
                            target_content = json.loads(args_str.get('TargetContent', '""'))
                            with open('recovered2.txt', 'a') as out:
                                out.write(f"==== {target_file} ====\n")
                                out.write(target_content)
                                out.write("\n")
        except Exception as e:
            pass

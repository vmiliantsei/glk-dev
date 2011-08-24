// The following table is auto-generated by parse_dispatch.py.
// Generated for Glk API version 0.7.3
/* Some literal ArgInt and ArgChar objects, used to speed
   up the proto_map construction. These globals are also
   used in the build_function() call in gi_dispa.js. */
var arg_int_unsigned = new ArgInt(false);
var arg_int_signed = new ArgInt(true);
var arg_char_unsigned = new ArgChar(false);
var arg_char_native = new ArgChar(null);
var arg_char_signed = new ArgChar(true);
var arg_class_window = new ArgClass("window");
var arg_class_stream = new ArgClass("stream");
var arg_class_fileref = new ArgClass("fileref");
var arg_class_schannel = new ArgClass("schannel");
var proto_map = {
// 1 (0x001): exit - 0:
1 : new FuncSpec(1, "exit", new Prototype([], null)),
// 3 (0x003): tick - 0:
3 : new FuncSpec(3, "tick", new Prototype([], null)),
// 4 (0x004): gestalt - 3IuIu:Iu
4 : new FuncSpec(4, "gestalt", new Prototype([arg_int_unsigned, arg_int_unsigned], new ArgRef(arg_int_unsigned, false, true, true))),
// 5 (0x005): gestalt_ext - 4IuIu&#Iu:Iu
5 : new FuncSpec(5, "gestalt_ext", new Prototype([arg_int_unsigned, arg_int_unsigned, new ArgArray(arg_int_unsigned, false, true, true, false)], new ArgRef(arg_int_unsigned, false, true, true))),
// 32 (0x020): window_iterate - 3Qa<Iu:Qa
32 : new FuncSpec(32, "window_iterate", new Prototype([arg_class_window, new ArgRef(arg_int_unsigned, false, true, false)], new ArgRef(arg_class_window, false, true, true))),
// 33 (0x021): window_get_rock - 2Qa:Iu
33 : new FuncSpec(33, "window_get_rock", new Prototype([arg_class_window], new ArgRef(arg_int_unsigned, false, true, true))),
// 34 (0x022): window_get_root - 1:Qa
34 : new FuncSpec(34, "window_get_root", new Prototype([], new ArgRef(arg_class_window, false, true, true))),
// 35 (0x023): window_open - 6QaIuIuIuIu:Qa
35 : new FuncSpec(35, "window_open", new Prototype([arg_class_window, arg_int_unsigned, arg_int_unsigned, arg_int_unsigned, arg_int_unsigned], new ArgRef(arg_class_window, false, true, true))),
// 36 (0x024): window_close - 2Qa<[2IuIu]:
36 : new FuncSpec(36, "window_close", new Prototype([arg_class_window, new ArgRef(new ArgStruct(new Prototype([arg_int_unsigned, arg_int_unsigned], null)), false, true, false)], null)),
// 37 (0x025): window_get_size - 3Qa<Iu<Iu:
37 : new FuncSpec(37, "window_get_size", new Prototype([arg_class_window, new ArgRef(arg_int_unsigned, false, true, false), new ArgRef(arg_int_unsigned, false, true, false)], null)),
// 38 (0x026): window_set_arrangement - 4QaIuIuQa:
38 : new FuncSpec(38, "window_set_arrangement", new Prototype([arg_class_window, arg_int_unsigned, arg_int_unsigned, arg_class_window], null)),
// 39 (0x027): window_get_arrangement - 4Qa<Iu<Iu<Qa:
39 : new FuncSpec(39, "window_get_arrangement", new Prototype([arg_class_window, new ArgRef(arg_int_unsigned, false, true, false), new ArgRef(arg_int_unsigned, false, true, false), new ArgRef(arg_class_window, false, true, false)], null)),
// 40 (0x028): window_get_type - 2Qa:Iu
40 : new FuncSpec(40, "window_get_type", new Prototype([arg_class_window], new ArgRef(arg_int_unsigned, false, true, true))),
// 41 (0x029): window_get_parent - 2Qa:Qa
41 : new FuncSpec(41, "window_get_parent", new Prototype([arg_class_window], new ArgRef(arg_class_window, false, true, true))),
// 42 (0x02A): window_clear - 1Qa:
42 : new FuncSpec(42, "window_clear", new Prototype([arg_class_window], null)),
// 43 (0x02B): window_move_cursor - 3QaIuIu:
43 : new FuncSpec(43, "window_move_cursor", new Prototype([arg_class_window, arg_int_unsigned, arg_int_unsigned], null)),
// 44 (0x02C): window_get_stream - 2Qa:Qb
44 : new FuncSpec(44, "window_get_stream", new Prototype([arg_class_window], new ArgRef(arg_class_stream, false, true, true))),
// 45 (0x02D): window_set_echo_stream - 2QaQb:
45 : new FuncSpec(45, "window_set_echo_stream", new Prototype([arg_class_window, arg_class_stream], null)),
// 46 (0x02E): window_get_echo_stream - 2Qa:Qb
46 : new FuncSpec(46, "window_get_echo_stream", new Prototype([arg_class_window], new ArgRef(arg_class_stream, false, true, true))),
// 47 (0x02F): set_window - 1Qa:
47 : new FuncSpec(47, "set_window", new Prototype([arg_class_window], null)),
// 48 (0x030): window_get_sibling - 2Qa:Qa
48 : new FuncSpec(48, "window_get_sibling", new Prototype([arg_class_window], new ArgRef(arg_class_window, false, true, true))),
// 64 (0x040): stream_iterate - 3Qb<Iu:Qb
64 : new FuncSpec(64, "stream_iterate", new Prototype([arg_class_stream, new ArgRef(arg_int_unsigned, false, true, false)], new ArgRef(arg_class_stream, false, true, true))),
// 65 (0x041): stream_get_rock - 2Qb:Iu
65 : new FuncSpec(65, "stream_get_rock", new Prototype([arg_class_stream], new ArgRef(arg_int_unsigned, false, true, true))),
// 66 (0x042): stream_open_file - 4QcIuIu:Qb
66 : new FuncSpec(66, "stream_open_file", new Prototype([arg_class_fileref, arg_int_unsigned, arg_int_unsigned], new ArgRef(arg_class_stream, false, true, true))),
// 67 (0x043): stream_open_memory - 4&#!CnIuIu:Qb
67 : new FuncSpec(67, "stream_open_memory", new Prototype([new ArgArray(arg_char_native, true, true, true, false), arg_int_unsigned, arg_int_unsigned], new ArgRef(arg_class_stream, false, true, true))),
// 68 (0x044): stream_close - 2Qb<[2IuIu]:
68 : new FuncSpec(68, "stream_close", new Prototype([arg_class_stream, new ArgRef(new ArgStruct(new Prototype([arg_int_unsigned, arg_int_unsigned], null)), false, true, false)], null)),
// 69 (0x045): stream_set_position - 3QbIsIu:
69 : new FuncSpec(69, "stream_set_position", new Prototype([arg_class_stream, arg_int_signed, arg_int_unsigned], null)),
// 70 (0x046): stream_get_position - 2Qb:Iu
70 : new FuncSpec(70, "stream_get_position", new Prototype([arg_class_stream], new ArgRef(arg_int_unsigned, false, true, true))),
// 71 (0x047): stream_set_current - 1Qb:
71 : new FuncSpec(71, "stream_set_current", new Prototype([arg_class_stream], null)),
// 72 (0x048): stream_get_current - 1:Qb
72 : new FuncSpec(72, "stream_get_current", new Prototype([], new ArgRef(arg_class_stream, false, true, true))),
// 96 (0x060): fileref_create_temp - 3IuIu:Qc
96 : new FuncSpec(96, "fileref_create_temp", new Prototype([arg_int_unsigned, arg_int_unsigned], new ArgRef(arg_class_fileref, false, true, true))),
// 97 (0x061): fileref_create_by_name - 4IuSIu:Qc
97 : new FuncSpec(97, "fileref_create_by_name", new Prototype([arg_int_unsigned, new ArgString(), arg_int_unsigned], new ArgRef(arg_class_fileref, false, true, true))),
// 98 (0x062): fileref_create_by_prompt - 4IuIuIu:Qc
98 : new FuncSpec(98, "fileref_create_by_prompt", new Prototype([arg_int_unsigned, arg_int_unsigned, arg_int_unsigned], new ArgRef(arg_class_fileref, false, true, true))),
// 99 (0x063): fileref_destroy - 1Qc:
99 : new FuncSpec(99, "fileref_destroy", new Prototype([arg_class_fileref], null)),
// 100 (0x064): fileref_iterate - 3Qc<Iu:Qc
100 : new FuncSpec(100, "fileref_iterate", new Prototype([arg_class_fileref, new ArgRef(arg_int_unsigned, false, true, false)], new ArgRef(arg_class_fileref, false, true, true))),
// 101 (0x065): fileref_get_rock - 2Qc:Iu
101 : new FuncSpec(101, "fileref_get_rock", new Prototype([arg_class_fileref], new ArgRef(arg_int_unsigned, false, true, true))),
// 102 (0x066): fileref_delete_file - 1Qc:
102 : new FuncSpec(102, "fileref_delete_file", new Prototype([arg_class_fileref], null)),
// 103 (0x067): fileref_does_file_exist - 2Qc:Iu
103 : new FuncSpec(103, "fileref_does_file_exist", new Prototype([arg_class_fileref], new ArgRef(arg_int_unsigned, false, true, true))),
// 104 (0x068): fileref_create_from_fileref - 4IuQcIu:Qc
104 : new FuncSpec(104, "fileref_create_from_fileref", new Prototype([arg_int_unsigned, arg_class_fileref, arg_int_unsigned], new ArgRef(arg_class_fileref, false, true, true))),
// 128 (0x080): put_char - 1Cu:
128 : new FuncSpec(128, "put_char", new Prototype([arg_char_unsigned], null)),
// 129 (0x081): put_char_stream - 2QbCu:
129 : new FuncSpec(129, "put_char_stream", new Prototype([arg_class_stream, arg_char_unsigned], null)),
// 130 (0x082): put_string - 1S:
130 : new FuncSpec(130, "put_string", new Prototype([new ArgString()], null)),
// 131 (0x083): put_string_stream - 2QbS:
131 : new FuncSpec(131, "put_string_stream", new Prototype([arg_class_stream, new ArgString()], null)),
// 132 (0x084): put_buffer - 1>+#Cn:
132 : new FuncSpec(132, "put_buffer", new Prototype([new ArgArray(arg_char_native, false, true, false, true)], null)),
// 133 (0x085): put_buffer_stream - 2Qb>+#Cn:
133 : new FuncSpec(133, "put_buffer_stream", new Prototype([arg_class_stream, new ArgArray(arg_char_native, false, true, false, true)], null)),
// 134 (0x086): set_style - 1Iu:
134 : new FuncSpec(134, "set_style", new Prototype([arg_int_unsigned], null)),
// 135 (0x087): set_style_stream - 2QbIu:
135 : new FuncSpec(135, "set_style_stream", new Prototype([arg_class_stream, arg_int_unsigned], null)),
// 144 (0x090): get_char_stream - 2Qb:Is
144 : new FuncSpec(144, "get_char_stream", new Prototype([arg_class_stream], new ArgRef(arg_int_signed, false, true, true))),
// 145 (0x091): get_line_stream - 3Qb<+#Cn:Iu
145 : new FuncSpec(145, "get_line_stream", new Prototype([arg_class_stream, new ArgArray(arg_char_native, false, false, true, true)], new ArgRef(arg_int_unsigned, false, true, true))),
// 146 (0x092): get_buffer_stream - 3Qb<+#Cn:Iu
146 : new FuncSpec(146, "get_buffer_stream", new Prototype([arg_class_stream, new ArgArray(arg_char_native, false, false, true, true)], new ArgRef(arg_int_unsigned, false, true, true))),
// 160 (0x0A0): char_to_lower - 2Cu:Cu
160 : new FuncSpec(160, "char_to_lower", new Prototype([arg_char_unsigned], new ArgRef(arg_char_unsigned, false, true, true))),
// 161 (0x0A1): char_to_upper - 2Cu:Cu
161 : new FuncSpec(161, "char_to_upper", new Prototype([arg_char_unsigned], new ArgRef(arg_char_unsigned, false, true, true))),
// 176 (0x0B0): stylehint_set - 4IuIuIuIs:
176 : new FuncSpec(176, "stylehint_set", new Prototype([arg_int_unsigned, arg_int_unsigned, arg_int_unsigned, arg_int_signed], null)),
// 177 (0x0B1): stylehint_clear - 3IuIuIu:
177 : new FuncSpec(177, "stylehint_clear", new Prototype([arg_int_unsigned, arg_int_unsigned, arg_int_unsigned], null)),
// 178 (0x0B2): style_distinguish - 4QaIuIu:Iu
178 : new FuncSpec(178, "style_distinguish", new Prototype([arg_class_window, arg_int_unsigned, arg_int_unsigned], new ArgRef(arg_int_unsigned, false, true, true))),
// 179 (0x0B3): style_measure - 5QaIuIu<Iu:Iu
179 : new FuncSpec(179, "style_measure", new Prototype([arg_class_window, arg_int_unsigned, arg_int_unsigned, new ArgRef(arg_int_unsigned, false, true, false)], new ArgRef(arg_int_unsigned, false, true, true))),
// 192 (0x0C0): select - 1<+[4IuQaIuIu]:
192 : new FuncSpec(192, "select", new Prototype([new ArgRef(new ArgStruct(new Prototype([arg_int_unsigned, arg_class_window, arg_int_unsigned, arg_int_unsigned], null)), false, true, true)], null)),
// 193 (0x0C1): select_poll - 1<+[4IuQaIuIu]:
193 : new FuncSpec(193, "select_poll", new Prototype([new ArgRef(new ArgStruct(new Prototype([arg_int_unsigned, arg_class_window, arg_int_unsigned, arg_int_unsigned], null)), false, true, true)], null)),
// 208 (0x0D0): request_line_event - 3Qa&+#!CnIu:
208 : new FuncSpec(208, "request_line_event", new Prototype([arg_class_window, new ArgArray(arg_char_native, true, true, true, true), arg_int_unsigned], null)),
// 209 (0x0D1): cancel_line_event - 2Qa<[4IuQaIuIu]:
209 : new FuncSpec(209, "cancel_line_event", new Prototype([arg_class_window, new ArgRef(new ArgStruct(new Prototype([arg_int_unsigned, arg_class_window, arg_int_unsigned, arg_int_unsigned], null)), false, true, false)], null)),
// 210 (0x0D2): request_char_event - 1Qa:
210 : new FuncSpec(210, "request_char_event", new Prototype([arg_class_window], null)),
// 211 (0x0D3): cancel_char_event - 1Qa:
211 : new FuncSpec(211, "cancel_char_event", new Prototype([arg_class_window], null)),
// 212 (0x0D4): request_mouse_event - 1Qa:
212 : new FuncSpec(212, "request_mouse_event", new Prototype([arg_class_window], null)),
// 213 (0x0D5): cancel_mouse_event - 1Qa:
213 : new FuncSpec(213, "cancel_mouse_event", new Prototype([arg_class_window], null)),
// 214 (0x0D6): request_timer_events - 1Iu:
214 : new FuncSpec(214, "request_timer_events", new Prototype([arg_int_unsigned], null)),
// 224 (0x0E0): image_get_info - 4Iu<Iu<Iu:Iu
224 : new FuncSpec(224, "image_get_info", new Prototype([arg_int_unsigned, new ArgRef(arg_int_unsigned, false, true, false), new ArgRef(arg_int_unsigned, false, true, false)], new ArgRef(arg_int_unsigned, false, true, true))),
// 225 (0x0E1): image_draw - 5QaIuIsIs:Iu
225 : new FuncSpec(225, "image_draw", new Prototype([arg_class_window, arg_int_unsigned, arg_int_signed, arg_int_signed], new ArgRef(arg_int_unsigned, false, true, true))),
// 226 (0x0E2): image_draw_scaled - 7QaIuIsIsIuIu:Iu
226 : new FuncSpec(226, "image_draw_scaled", new Prototype([arg_class_window, arg_int_unsigned, arg_int_signed, arg_int_signed, arg_int_unsigned, arg_int_unsigned], new ArgRef(arg_int_unsigned, false, true, true))),
// 232 (0x0E8): window_flow_break - 1Qa:
232 : new FuncSpec(232, "window_flow_break", new Prototype([arg_class_window], null)),
// 233 (0x0E9): window_erase_rect - 5QaIsIsIuIu:
233 : new FuncSpec(233, "window_erase_rect", new Prototype([arg_class_window, arg_int_signed, arg_int_signed, arg_int_unsigned, arg_int_unsigned], null)),
// 234 (0x0EA): window_fill_rect - 6QaIuIsIsIuIu:
234 : new FuncSpec(234, "window_fill_rect", new Prototype([arg_class_window, arg_int_unsigned, arg_int_signed, arg_int_signed, arg_int_unsigned, arg_int_unsigned], null)),
// 235 (0x0EB): window_set_background_color - 2QaIu:
235 : new FuncSpec(235, "window_set_background_color", new Prototype([arg_class_window, arg_int_unsigned], null)),
// 240 (0x0F0): schannel_iterate - 3Qd<Iu:Qd
240 : new FuncSpec(240, "schannel_iterate", new Prototype([arg_class_schannel, new ArgRef(arg_int_unsigned, false, true, false)], new ArgRef(arg_class_schannel, false, true, true))),
// 241 (0x0F1): schannel_get_rock - 2Qd:Iu
241 : new FuncSpec(241, "schannel_get_rock", new Prototype([arg_class_schannel], new ArgRef(arg_int_unsigned, false, true, true))),
// 242 (0x0F2): schannel_create - 2Iu:Qd
242 : new FuncSpec(242, "schannel_create", new Prototype([arg_int_unsigned], new ArgRef(arg_class_schannel, false, true, true))),
// 243 (0x0F3): schannel_destroy - 1Qd:
243 : new FuncSpec(243, "schannel_destroy", new Prototype([arg_class_schannel], null)),
// 244 (0x0F4): schannel_create_ext - 3IuIu:Qd
244 : new FuncSpec(244, "schannel_create_ext", new Prototype([arg_int_unsigned, arg_int_unsigned], new ArgRef(arg_class_schannel, false, true, true))),
// 247 (0x0F7): schannel_play_multi - 4>+#Qd>+#IuIu:Iu
247 : new FuncSpec(247, "schannel_play_multi", new Prototype([new ArgArray(arg_class_schannel, false, true, false, true), new ArgArray(arg_int_unsigned, false, true, false, true), arg_int_unsigned], new ArgRef(arg_int_unsigned, false, true, true))),
// 248 (0x0F8): schannel_play - 3QdIu:Iu
248 : new FuncSpec(248, "schannel_play", new Prototype([arg_class_schannel, arg_int_unsigned], new ArgRef(arg_int_unsigned, false, true, true))),
// 249 (0x0F9): schannel_play_ext - 5QdIuIuIu:Iu
249 : new FuncSpec(249, "schannel_play_ext", new Prototype([arg_class_schannel, arg_int_unsigned, arg_int_unsigned, arg_int_unsigned], new ArgRef(arg_int_unsigned, false, true, true))),
// 250 (0x0FA): schannel_stop - 1Qd:
250 : new FuncSpec(250, "schannel_stop", new Prototype([arg_class_schannel], null)),
// 251 (0x0FB): schannel_set_volume - 2QdIu:
251 : new FuncSpec(251, "schannel_set_volume", new Prototype([arg_class_schannel, arg_int_unsigned], null)),
// 252 (0x0FC): sound_load_hint - 2IuIu:
252 : new FuncSpec(252, "sound_load_hint", new Prototype([arg_int_unsigned, arg_int_unsigned], null)),
// 253 (0x0FD): schannel_set_volume_ext - 4QdIuIuIu:
253 : new FuncSpec(253, "schannel_set_volume_ext", new Prototype([arg_class_schannel, arg_int_unsigned, arg_int_unsigned, arg_int_unsigned], null)),
// 254 (0x0FE): schannel_pause - 1Qd:
254 : new FuncSpec(254, "schannel_pause", new Prototype([arg_class_schannel], null)),
// 255 (0x0FF): schannel_unpause - 1Qd:
255 : new FuncSpec(255, "schannel_unpause", new Prototype([arg_class_schannel], null)),
// 256 (0x100): set_hyperlink - 1Iu:
256 : new FuncSpec(256, "set_hyperlink", new Prototype([arg_int_unsigned], null)),
// 257 (0x101): set_hyperlink_stream - 2QbIu:
257 : new FuncSpec(257, "set_hyperlink_stream", new Prototype([arg_class_stream, arg_int_unsigned], null)),
// 258 (0x102): request_hyperlink_event - 1Qa:
258 : new FuncSpec(258, "request_hyperlink_event", new Prototype([arg_class_window], null)),
// 259 (0x103): cancel_hyperlink_event - 1Qa:
259 : new FuncSpec(259, "cancel_hyperlink_event", new Prototype([arg_class_window], null)),
// 288 (0x120): buffer_to_lower_case_uni - 3&+#IuIu:Iu
288 : new FuncSpec(288, "buffer_to_lower_case_uni", new Prototype([new ArgArray(arg_int_unsigned, false, true, true, true), arg_int_unsigned], new ArgRef(arg_int_unsigned, false, true, true))),
// 289 (0x121): buffer_to_upper_case_uni - 3&+#IuIu:Iu
289 : new FuncSpec(289, "buffer_to_upper_case_uni", new Prototype([new ArgArray(arg_int_unsigned, false, true, true, true), arg_int_unsigned], new ArgRef(arg_int_unsigned, false, true, true))),
// 290 (0x122): buffer_to_title_case_uni - 4&+#IuIuIu:Iu
290 : new FuncSpec(290, "buffer_to_title_case_uni", new Prototype([new ArgArray(arg_int_unsigned, false, true, true, true), arg_int_unsigned, arg_int_unsigned], new ArgRef(arg_int_unsigned, false, true, true))),
// 291 (0x123): buffer_canon_decompose_uni - 3&+#IuIu:Iu
291 : new FuncSpec(291, "buffer_canon_decompose_uni", new Prototype([new ArgArray(arg_int_unsigned, false, true, true, true), arg_int_unsigned], new ArgRef(arg_int_unsigned, false, true, true))),
// 292 (0x124): buffer_canon_normalize_uni - 3&+#IuIu:Iu
292 : new FuncSpec(292, "buffer_canon_normalize_uni", new Prototype([new ArgArray(arg_int_unsigned, false, true, true, true), arg_int_unsigned], new ArgRef(arg_int_unsigned, false, true, true))),
// 296 (0x128): put_char_uni - 1Iu:
296 : new FuncSpec(296, "put_char_uni", new Prototype([arg_int_unsigned], null)),
// 297 (0x129): put_string_uni - 1U:
297 : new FuncSpec(297, "put_string_uni", new Prototype([new ArgUnicode()], null)),
// 298 (0x12A): put_buffer_uni - 1>+#Iu:
298 : new FuncSpec(298, "put_buffer_uni", new Prototype([new ArgArray(arg_int_unsigned, false, true, false, true)], null)),
// 299 (0x12B): put_char_stream_uni - 2QbIu:
299 : new FuncSpec(299, "put_char_stream_uni", new Prototype([arg_class_stream, arg_int_unsigned], null)),
// 300 (0x12C): put_string_stream_uni - 2QbU:
300 : new FuncSpec(300, "put_string_stream_uni", new Prototype([arg_class_stream, new ArgUnicode()], null)),
// 301 (0x12D): put_buffer_stream_uni - 2Qb>+#Iu:
301 : new FuncSpec(301, "put_buffer_stream_uni", new Prototype([arg_class_stream, new ArgArray(arg_int_unsigned, false, true, false, true)], null)),
// 304 (0x130): get_char_stream_uni - 2Qb:Is
304 : new FuncSpec(304, "get_char_stream_uni", new Prototype([arg_class_stream], new ArgRef(arg_int_signed, false, true, true))),
// 305 (0x131): get_buffer_stream_uni - 3Qb<+#Iu:Iu
305 : new FuncSpec(305, "get_buffer_stream_uni", new Prototype([arg_class_stream, new ArgArray(arg_int_unsigned, false, false, true, true)], new ArgRef(arg_int_unsigned, false, true, true))),
// 306 (0x132): get_line_stream_uni - 3Qb<+#Iu:Iu
306 : new FuncSpec(306, "get_line_stream_uni", new Prototype([arg_class_stream, new ArgArray(arg_int_unsigned, false, false, true, true)], new ArgRef(arg_int_unsigned, false, true, true))),
// 312 (0x138): stream_open_file_uni - 4QcIuIu:Qb
312 : new FuncSpec(312, "stream_open_file_uni", new Prototype([arg_class_fileref, arg_int_unsigned, arg_int_unsigned], new ArgRef(arg_class_stream, false, true, true))),
// 313 (0x139): stream_open_memory_uni - 4&#!IuIuIu:Qb
313 : new FuncSpec(313, "stream_open_memory_uni", new Prototype([new ArgArray(arg_int_unsigned, true, true, true, false), arg_int_unsigned, arg_int_unsigned], new ArgRef(arg_class_stream, false, true, true))),
// 320 (0x140): request_char_event_uni - 1Qa:
320 : new FuncSpec(320, "request_char_event_uni", new Prototype([arg_class_window], null)),
// 321 (0x141): request_line_event_uni - 3Qa&+#!IuIu:
321 : new FuncSpec(321, "request_line_event_uni", new Prototype([arg_class_window, new ArgArray(arg_int_unsigned, true, true, true, true), arg_int_unsigned], null)),
// 336 (0x150): set_echo_line_event - 2QaIu:
336 : new FuncSpec(336, "set_echo_line_event", new Prototype([arg_class_window, arg_int_unsigned], null)),
// 337 (0x151): set_terminators_line_event - 2Qa>#Iu:
337 : new FuncSpec(337, "set_terminators_line_event", new Prototype([arg_class_window, new ArgArray(arg_int_unsigned, false, true, false, false)], null)),
// 352 (0x160): current_time - 1<+[3IsIuIs]:
352 : new FuncSpec(352, "current_time", new Prototype([new ArgRef(new ArgStruct(new Prototype([arg_int_signed, arg_int_unsigned, arg_int_signed], null)), false, true, true)], null)),
// 353 (0x161): current_simple_time - 2Iu:Is
353 : new FuncSpec(353, "current_simple_time", new Prototype([arg_int_unsigned], new ArgRef(arg_int_signed, false, true, true))),
// 360 (0x168): time_to_date_utc - 2>+[3IsIuIs]<+[8IsIsIsIsIsIsIsIs]:
360 : new FuncSpec(360, "time_to_date_utc", new Prototype([new ArgRef(new ArgStruct(new Prototype([arg_int_signed, arg_int_unsigned, arg_int_signed], null)), true, false, true), new ArgRef(new ArgStruct(new Prototype([arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed], null)), false, true, true)], null)),
// 361 (0x169): time_to_date_local - 2>+[3IsIuIs]<+[8IsIsIsIsIsIsIsIs]:
361 : new FuncSpec(361, "time_to_date_local", new Prototype([new ArgRef(new ArgStruct(new Prototype([arg_int_signed, arg_int_unsigned, arg_int_signed], null)), true, false, true), new ArgRef(new ArgStruct(new Prototype([arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed], null)), false, true, true)], null)),
// 362 (0x16A): simple_time_to_date_utc - 3IsIu<+[8IsIsIsIsIsIsIsIs]:
362 : new FuncSpec(362, "simple_time_to_date_utc", new Prototype([arg_int_signed, arg_int_unsigned, new ArgRef(new ArgStruct(new Prototype([arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed], null)), false, true, true)], null)),
// 363 (0x16B): simple_time_to_date_local - 3IsIu<+[8IsIsIsIsIsIsIsIs]:
363 : new FuncSpec(363, "simple_time_to_date_local", new Prototype([arg_int_signed, arg_int_unsigned, new ArgRef(new ArgStruct(new Prototype([arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed], null)), false, true, true)], null)),
// 364 (0x16C): date_to_time_utc - 2>+[8IsIsIsIsIsIsIsIs]<+[3IsIuIs]:
364 : new FuncSpec(364, "date_to_time_utc", new Prototype([new ArgRef(new ArgStruct(new Prototype([arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed], null)), true, false, true), new ArgRef(new ArgStruct(new Prototype([arg_int_signed, arg_int_unsigned, arg_int_signed], null)), false, true, true)], null)),
// 365 (0x16D): date_to_time_local - 2>+[8IsIsIsIsIsIsIsIs]<+[3IsIuIs]:
365 : new FuncSpec(365, "date_to_time_local", new Prototype([new ArgRef(new ArgStruct(new Prototype([arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed], null)), true, false, true), new ArgRef(new ArgStruct(new Prototype([arg_int_signed, arg_int_unsigned, arg_int_signed], null)), false, true, true)], null)),
// 366 (0x16E): date_to_simple_time_utc - 3>+[8IsIsIsIsIsIsIsIs]Iu:Is
366 : new FuncSpec(366, "date_to_simple_time_utc", new Prototype([new ArgRef(new ArgStruct(new Prototype([arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed], null)), true, false, true), arg_int_unsigned], new ArgRef(arg_int_signed, false, true, true))),
// 367 (0x16F): date_to_simple_time_local - 3>+[8IsIsIsIsIsIsIsIs]Iu:Is
367 : new FuncSpec(367, "date_to_simple_time_local", new Prototype([new ArgRef(new ArgStruct(new Prototype([arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed, arg_int_signed], null)), true, false, true), arg_int_unsigned], new ArgRef(arg_int_signed, false, true, true)))
};
// End of auto-generated table.

import * as mongoose from "mongoose";

import * as User from "src/models/User";
import Detector from "src/types/Detector";
import { ValidatedDetectionQuery } from "src/types/query/DetectionQuery";

export type Type = mongoose.Document & {
	ownerId: mongoose.Types.ObjectId;
	projectSlug: string;
	hid: mongoose.Types.ObjectId;
	scheduled: Date;
	detector: Detector;
	query: ValidatedDetectionQuery;
};

const Schema = new mongoose.Schema({
	ownerId: {
		type: mongoose.Types.ObjectId,
		ref: User.ModelName,
		required: true
	},
	projectSlug: {
		type: String,
		required: true
	},
	hid: {
		type: mongoose.Types.ObjectId,
		required: true,
		unique: true
	},
	scheduled: {
		type: Date,
		required: true
	},
	detector: {
		type: {
			name: String,
			slug: String,
			version: String
		},
		required: true
	},
	query: {
		type: {
			target: {
				type: {
					directory: {
						type: {
							absolute: String,
							relative: String
						},
						required: true
					},
					revision: {
						type: {
							branch: String,
							commitId: String
						}
					}
				},
				required: true
			},
			output: String,
			parameters: Object
		},
		required: true
	}
});

export const ModelName = "Job";
export const Model = mongoose.model<Type>(ModelName, Schema, "jobs");

export default Model;
